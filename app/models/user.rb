class User < ApplicationRecord
  has_many :orders
  has_secure_password

 

  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user&.authenticate(password)
  end
end