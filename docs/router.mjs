// Editorial routing rules, not measured cross-provider performance.
export function selectModels(data, request) {
  const target = request.complexity === "hard" ? "deep" : request.priority === "economy" || request.task === "extract" ? "fast" : "balanced";
  const eligible = data.models.filter(m =>
    (request.provider === "any" || m.provider === request.provider) &&
    m.inputs.includes(request.input) &&
    (request.context === "normal" || (m.context !== null && m.context >= 900000)) &&
    (request.complexity !== "hard" || m.tier !== "fast"));
  return eligible.map(m => {
    const taskFit = m.tasks.includes(request.task);
    const score = (taskFit ? 4 : 0) + (m.tier === target ? 3 : 0);
    return {...m, score, taskFit,
      reason: (taskFit ? "Documented role matches this task. " : "General alternative; evaluate task fit. ") +
        (m.tier === target ? "Matches your requested working style. " : "Offers a different speed and capability tradeoff. ") +
        (request.input !== "text" ? "Supports the selected input directly. " : "") +
        (request.context === "large" ? "Published context clears the selected threshold; reserve room for output. " : ""),
      effort: m.provider === "openai" ? (request.complexity === "hard" ? "Start at high reasoning; compare against medium on your evaluation set." : "Start at low or medium reasoning; test quality before increasing.") :
        m.provider === "google" && m.id === "gemini-4-argon" ? (request.complexity === "hard" ? "Try high thinking; compare with medium." : "Try low or medium thinking.") :
        m.provider === "anthropic" ? (m.id === "claude-opus-5-5" || m.id === "claude-haiku-5-5" ? "Vendor default effort: medium. Increase only after evaluating failures." : "Vendor default effort: high. Tune on representative examples.") :
        "Use the vendor default first; tune supported reasoning controls on representative examples."
    };
  }).sort((a,b) => b.score-a.score || a.name.localeCompare(b.name));
}
