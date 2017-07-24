# LCC.PnP<%= name %>

This project contains the PnP deployment xml and assets to support the Active LCC site.

To deploy this locally to a dev environment please use the following PowerShell command

``` PowerShell
\\netapp02\tfs\TFS\Packages\SP2013\LCC.PnPProvisioning\LCC.PnPProvisioning.Build\latest\Apply-PnPProvisioningTemplate.ps1 -siteUrl http://active-dev.leeds.gov.uk -pnpTemplate lcc.pnp<%= name %>.xml -binaryWorkingFolder d:\Dev2\lcc.pnp<%= name %>
```