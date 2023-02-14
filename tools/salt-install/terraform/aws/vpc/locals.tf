# Copyright (C) The Arvados Authors. All rights reserved.
#
# SPDX-License-Identifier: CC-BY-SA-3.0

locals {
  allowed_ports = {
    http: "80",
    https: "443",
    ssh: "22",
  }
  availability_zone = data.aws_availability_zones.available.names[0]
  hostnames = [ "controller", "workbench", "keep0", "keep1", "keepproxy", "shell" ]
  arvados_dns_zone = "${var.cluster_name}.${var.domain_name}"
  public_ip = { for k, v in aws_eip.arvados_eip: k => v.public_ip }
  private_ip = {
    "controller": "10.1.1.11",
    "workbench": "10.1.1.15",
    "keepproxy": "10.1.1.12",
    "shell": "10.1.1.17",
    "keep0": "10.1.1.13",
    "keep1": "10.1.1.14"
  }
  aliases = {
    controller: ["ws"]
    workbench: ["workbench2", "webshell"]
    keepproxy: ["keep", "download", "*.collections"]
  }
  cname_by_host = flatten([
    for host, aliases in local.aliases : [
      for alias in aliases : {
        record = alias
        cname = host
      }
    ]
  ])
}
