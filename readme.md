**React Symhony ecommerce**

Requirements
----------------------
* nodejs ≤  v9.11.1
* composer ≤  1.5.6
* php ≤  7.1.19
* yarn ≤  1.15.2


Install instructions
-----------------------

run 
``composer install``

to serve run 
``php bin/console serve:run``

navigate to [localhost:8000](http://localhost:8000/) to view page

Directory Structure
-----------------------

```
.
├── assets                  # client files
│   ├── images              # Image assets
│   ├── js                  # react/javascript files
│   └── scss                # scss resources
├── src                     # symphony code
│   ├── Controller          # Controller Files
│   ├── Entity              # Doctorine Entities
│   ├── Migratoins          # Migration files
│   └── Repository          # Repository files
├── public                  # symphony public served files
│   ├── build               # Compiled react source
├── templates               # twig templates
│   └── default             # default twig template
└── readme.md               # this file

```