require 'test_helper'

class Quizs5ControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get quizs5_show_url
    assert_response :success
  end

end
