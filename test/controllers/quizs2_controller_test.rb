require 'test_helper'

class Quizs2ControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get quizs2_show_url
    assert_response :success
  end

end
