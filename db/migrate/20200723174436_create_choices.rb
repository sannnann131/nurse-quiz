class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.text :content, null: false #選択肢
      t.boolean :is_answer #正解か否か
      t.references :question_id #どの問題か
  
      t.timestamps
    end
  end
end