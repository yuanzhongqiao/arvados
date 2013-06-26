class ApiClientAuthorization < ArvadosModel
  include KindAndEtag
  include CommonApiTemplate

  belongs_to :api_client
  belongs_to :user
  after_initialize :assign_random_api_token

  api_accessible :superuser, :extend => :common do |t|
    t.add :owner
    t.add :user_id
    t.add :api_client_id
    t.add :api_token
    t.add :created_by_ip_address
    t.add :default_owner
    t.add :expires_at
    t.add :last_used_at
    t.add :last_used_by_ip_address
  end

  def assign_random_api_token
    self.api_token ||= rand(2**256).to_s(36)
  end

  def owner
    self.user.andand.uuid
  end
  def owner_was
    self.user_id_changed? ? User.find(self.user_id_was).andand.uuid : self.user.andand.uuid
  end
  def owner_changed?
    self.user_id_changed?
  end

  def uuid
    self.api_token
  end
  def uuid=(x) end
  def uuid_was
    self.api_token_was
  end
  def uuid_changed?
    self.api_token_changed?
  end

  def modified_by_client
    nil
  end
  def modified_by_client=(x) end

  def modified_by_user
    nil
  end
  def modified_by_user=(x) end

  def modified_at
    nil
  end
  def modified_at=(x) end

  protected

  def permission_to_create
    current_user.andand.is_admin or (current_user.andand.id == self.user_id)
  end

  def permission_to_update
    (permission_to_create and
     not self.user_id_changed? and
     not self.owner_changed?)
  end
end
