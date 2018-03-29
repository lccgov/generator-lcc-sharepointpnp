# <%= name %>

This project contains a basic PnP deployment xml that has been generated using the [LCC SharePoint PnP Generator](https://github.com/lccgov/generator-lcc-sharepointpnp)

## PnP Schema
The schema is based on the the [PnP Remote Provisioning Engine](https://github.com/SharePoint/PnP-Provisioning-Schema).

Please use the following links as a guide to populating the schema xml file

- [ProvisioningSchema-2017-05](https://github.com/SharePoint/PnP-Provisioning-Schema/blob/master/ProvisioningSchema-2017-05.md)
- [Full schema for 201705](https://github.com/SharePoint/PnP-Provisioning-Schema/blob/master/Samples/ProvisioningSchema-2017-05-FullSample-01.xml)

## Local Deployment
To deploy this locally to a dev environment please use the following PowerShell command. 
You may need to run the supporting application and PowerShell extensions 
at \TFS\TFS\Packages\SP2013\LCC.Provisioning.Extensibility\LCC.Provisioning.Extensibility\latest\install.ps1

These files are located on the internal TFS release destination folder

``` PowerShell
"C:\Program Files (x86)\LCC\Provisioning Extensibility\LCC.Provisioning.Extensibility.Console.exe" --SiteUrl <%= url %> --PnpTemplate <%= name %>.xml --BinaryWorkingFolder <%= path %> -l <%= path %>\logs
```

## Pushing files to an existing Git repository
Once you have created a Git repository, you can use the following commands to add the generated project to the repository. Replace **<lcc_repo>** below to match your new repo name

```sh
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/lccgov/<lcc_repo>.git
git push -u origin master
```