# Copyright (C) The Arvados Authors. All rights reserved.
#
# SPDX-License-Identifier: AGPL-3.0

class AddRuntimeTokenToContainer < ActiveRecord::Migration
  def change
    add_column :containers, :runtime_token, :text, :null => true
  end
end
