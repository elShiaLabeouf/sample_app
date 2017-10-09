require 'rails_helper'
require 'support/utilities.rb'
RSpec.describe "UserPages", type: :request do
  subject { page }
  describe "User Pages" do
  	before { visit signup_path }
    it { should have_content('Sign up') }
    it { should have_title(full_title('Sign up')) }
    
  end
end
