export const QuestionsPreview = ({
  question,
  onToggleQuestion,
  isOpen,
}) => {
  return (
    <section
      onClick={() => onToggleQuestion(question.id)}
      className='questions-preview '
    >
      <div className='question-tab flex align-center space-between'>
        <h1 className="title-header">{question.title}</h1>
        {isOpen ? (
          <span className='up-arrow'></span>
        ) : (
          <span className='down-arrow'></span>
        )}
      </div>
      {isOpen && <div className='answer-tab flex'><span className="dot"></span>{question.answer}</div>}
    </section>
  )
}
