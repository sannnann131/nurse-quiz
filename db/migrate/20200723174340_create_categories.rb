class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.text :content, null:false #クイズカテゴリー
      t.references :question_id  #クイズのid

      t.timestamps
    end
  end
end
