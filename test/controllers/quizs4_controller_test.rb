require 'test_helper'

class Quizs4ControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get quizs4_show_url
    assert_response :success
  end

end
