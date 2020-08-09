require 'csv'

CSV.foreach("question.csv", headers: true) do |row|
  Question.create(
      id:     row['id'],
      question:        row['question'],
      choice1:         row['choice1'],
      choice2:         row['choice2'],
      choice3:         row['choice3'],
      choice4:         row['choice4'],
      explanation:         row['explanation']
  )
end