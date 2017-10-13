FactoryGirl.define do
	factory :user do
		name 		 "Fyodor Dostoyevsky"
		email 	 "fyodor_d@ya.ru"
		password "foobar"
		password_confirmation "foobar"
	end
end
