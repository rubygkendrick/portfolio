import './AIWorkflow.css'

function AIWorkflow() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">AI Workflow</div>
        <div className="section-rule">
          <div className="stripe-pink"></div>
          <div className="stripe-red"></div>
          <div className="stripe-yellow"></div>
          <div className="stripe-teal"></div>
        </div>
      </div>
      <div className="ai-box">
        <p>Claude is my primary tool. I use it throughout my workflow: project management, architecture, debugging, code generation and review, and decision-making before I commit to an approach. I treat it like a senior developer I can think out loud with at any hour.</p>
        <p>I've also built with the Anthropic API directly, integrating Claude into a full-stack personal project as a context-aware financial assistant with access to real user data. I'm currently going deeper, building custom Claude skills and integrating AI tooling directly into my development environment.</p>
      </div>
    </section>
  )
}

export default AIWorkflow