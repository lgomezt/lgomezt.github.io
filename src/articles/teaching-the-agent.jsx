import { parseMarkdown } from '../utils/markdown'

export default function TeachingTheAgentArticle() {
  return (
    <div className="article-content">
    <p>
      Generative AI is transforming education, but there is growing evidence of student over-reliance on this technology and overconfidence 
      in their abilities. While it is impossible to ignore that students will use AI, simply inserting it into 
      classrooms without a strategy can harm learning. Therefore, instead of viewing AI as an oracle that provides answers, our 
      research focuses on {parseMarkdown("**designing tools that use AI creatively to enhance the learning process itself.**")}
    </p>
    <h2>Why Learning by Teaching Works</h2>
    <p>
    {parseMarkdown("We ground our approach in *Learning by Teaching* a well-established pedagogy. However, *its success is not due to the act of teaching alone*, but rather three specific underlying mechanisms:")}
    </p>
    <ul>
      <li> {parseMarkdown("**Cognitive Mechanisms:** Teaching forces Knowledge Reorganization. To explain a topic, a learner must transform disorganized facts \(\"inert knowledge\"\) into a coherent structure, establishing causal links between ideas. This process also necessitates Enhanced Retrieval Practice (active recall) and Deeper Processing, pushing learners toward higher-order cognitive tasks like analyzing and evaluating, rather than just passive review.")}</li>
      <li> {parseMarkdown("**Metacognitive Mechanisms:** As learners attempt to formulate an explanation, they naturally encounter Knowledge Gaps. This awareness triggers self-regulation, motivating them to resolve contradictions. Evidence suggests learners preparing to teach employ significantly more metacognitive strategies than those preparing for a test.")}</li>
      <li> {parseMarkdown("**Social Mechanisms:** The responsibility for another\'s learning creates a sense of purpose. This social pressure increases agency and motivates the learner to invest more effort in mastering the material.")}</li>
    </ul>
    <p>Here are some examples of ongoing projects that builds on these mechanisms:</p>

    <div className="testbeds-container">
      <div className="testbed-box">
        <h3 className="testbed-title">Learning by Debugging</h3>
        <div className="testbed-content">
          <div className="testbed-text">
            <p>
            In this scenario, students engage in pair programming with an agent that intentionally makes mistakes or exhibits misconceptions. By withholding the correct code, the agent forces the student to guide the solution, encouraging intellectual effort rather than passive consumption. A key focus of this research is determining how to sequence these mistakes to effectively scaffold learning, investigating whether educators should specify the order or if it can be automated based on difficulty levels. We are currently in the early stages of this investigation, so our working prototype is still quite raw.
            </p>
          </div>
          <div className="testbed-image">
            {/* <img src="/blogs/teaching-the-agent/learning_by_debugging.png" alt="Learning to Code testbed" /> */}
            <img src="/blogs/teaching-the-agent/learning_by_debugging.gif" alt="Learning to Code testbed" />
          </div>
          <div className="testbed-links">
            <a 
              href="https://e0gck4occ0co0ksgk8ocgo04.pandora.cs.uwaterloo.ca" 
              className="testbed-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🔗 Prototype
            </a>
            <a 
              href="https://github.com/lgomezt/Learning-by-Teaching" 
              className="testbed-button testbed-button-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              💻 Code 
            </a>
          </div>
        </div>
      </div>

      {/* <div className="testbed-box">
        <h3 className="testbed-title">Learning with Retrieval Practice</h3>
        <div className="testbed-content">
          <div className="testbed-text">
            <p>
              This project applies retrieval practice to podcast consumption. After a user listens to a podcast, they engage in spaced repetition conversations with an AI peer. The agent creates a dialogue containing inaccurate information about the episode. This forces the user to exercise their memory to correct the agent. We currently have a prototype developed using Google AI Studio that generates flashcards and conversation points to test how these subtle interactions influence long-term comprehension.
            </p>
          </div>
          <div className="testbed-image">
          <img src="/blogs/teaching-the-agent/learning_by_debugging.png" alt="Learning using Retrieval Practice" />
          </div>
          <div className="testbed-links">
            <a 
              href="https://ai.studio/apps/drive/1uZHQJ1xn3C5eOVx-aWlEXXGwZBO9jcxU" 
              className="testbed-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Prototype →
            </a>
            <a 
              href="#" 
              className="testbed-button testbed-button-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code →
            </a>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  )
}

