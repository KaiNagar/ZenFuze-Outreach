import { useState } from 'react'
import { QuestionsPreview } from './QuestionsPreview'

export const QuestionsList = ({
  questions,
  onToggleQuestion,
  currQuestionId,
}) => {
  const [isShowAll, setIsShowAll] = useState(false)

  const toggleShowMore = () => {
    setIsShowAll((prevState) => !prevState)
  }
  return (
    <section className='questions-list'>
      {questions.slice(0, 3).map((q) => (
        <QuestionsPreview
          onToggleQuestion={onToggleQuestion}
          key={q.id}
          question={q}
          isOpen={currQuestionId === q.id}
        />
      ))}
      {isShowAll &&
        questions
          .slice(3)
          .map((q) => (
            <QuestionsPreview
              onToggleQuestion={onToggleQuestion}
              key={q.id}
              question={q}
              isOpen={currQuestionId === q.id}
            />
          ))}
      <span className='show-btn' onClick={toggleShowMore}>
        {isShowAll ? 'Show less' : 'Show more'}
      </span>
    </section>
  )
}
