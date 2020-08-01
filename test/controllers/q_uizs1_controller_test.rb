require 'test_helper'

class QUizs1ControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get q_uizs1_show_url
    assert_response :success
  end

end
