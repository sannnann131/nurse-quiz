class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :content, null: false # 問題文
      t.text :explanation, null: false #解説
      t.references :category_id  #カテゴリーID
      
      t.timestamps
    end
  end
end
