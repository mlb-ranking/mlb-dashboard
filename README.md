# MLB Stats API

[![Greenkeeper badge](https://badges.greenkeeper.io/mlb-ranking/mlb-dashboard.svg)](https://greenkeeper.io/)

Goal: Build a dashboard to interact with available apis.

## Inspiration
* [Tumblr](http://baseballhackday.tumblr.com/)

## Resources
* [Pocket](https://getpocket.com/a/archive/grid/mlb-app/)

## Requirements
* Node.js (v8.1)
* Yarn

--- 

## APIs

### Great
* https://www.mysportsfeeds.com/data-feeds/api-docs

### Good
* https://cloud.google.com/bigquery/public-data/baseball
* https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas
* http://panz.io/mlbgame/
* http://rotoguru1.com/cgi-bin/getcred17.pl

### Trials
* https://fantasydata.com/pricing/mlb-data-api.aspx
* https://developer.sportradar.com/

### APIs/Data source/Feed [Original](https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas)
* **Statcast leaderboards** http://m.mlb.com/lookup/json/named.psc_leader_hit_hr_dist.bam?season=2015&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15
* **mlbprobablepitchers** - Retrieve list of probable pitchers for a given day https://github.com/jaw187/mlbprobablepitchers
* **mlbweather** - Retrieve current hourly forcast for all active mlb venues https://github.com/jaw187/mlbweather
* **mlbplays** - Retrieve all of the MLB Gameday plays for a given day https://github.com/jaw187/mlbplays
* **mlbgames** - Retrieve MLB games for a given day https://github.com/jaw187/mlbgames
* **mlbboxscores** - Retrieve MLB Boxscores for a given day https://github.com/jaw187/mlbboxscores
* **mlbplayers** - Retrieve MLB Gameday Player Data for a given day https://github.com/jaw187/mlbplayers
* **StattleShip Baseball API**: [api.stattleship.com](https://api.stattleship.com/) Explore our [Developer Documentation](http://developers.stattleship.com/) and [Get Your API Token](https://www.stattleship.com/) to see what's possible. SDKs Rails developer? Data science guru? We got your SDK! RubyGem: https://github.com/stattleship/stattleship-ruby R Wrapper: https://github.com/stattleship/stattleship-r 
* **SportRader API**: SportRadar, formerly known as Sports Data LLC, will provide participants of Boston Baseball Hack Day with expanded access to their RealTime game data API. http://developer.sportradar.com/files/index.html Baseball Hack Day Portal: http://developer.sportradar.com/Baseball_Hack_Day **2014, 2015, 2016 and 2017 SPONSOR THANK YOU!**
* **Seat Geek** has great API for venues, schedules: http://seatgeek.com/build  see events http://platform.seatgeek.com/#events (Get red sox games: http://api.seatgeek.com/2/events?performers.slug=boston-red-sox ) and venues http://platform.seatgeek.com/#venues access Fenway info like http://api.seatgeek.com/2/venues/21 It is completely open without any restriction. Very easy to use. **2014 and 2015  SPONSOR THANK YOU!**
* ESPN API:1 ~http://developer.espn.com/~ ~http://eveloper.espn.com/docs~ [DEPRECATED] 2013 Sponsor, Thank you!
* MLB Media Search Service:
http://m.mlb.com/ws/search/MediaSearchService?query=most%20popular&start=0&hitsPerPage=18&type=json&sort=desc&sort_type=date
* MLB Properties:
http://mlb.com/properties/mlb_properties.xml
http://mlb.com/lookup/json/named.team_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&all_star_sw=%27N%27
* MLB Master Scoreboard: http://mlb.mlb.com/gdcross/components/game/mlb/year_2015/month_03/day_28/master_scoreboard.json
* Baseball Prospectus Hitter Tunnels data http://www.baseballprospectus.com/sortable/hitter_tunnels.php
* Baseball Savant Statcast Search https://baseballsavant.mlb.com/statcast_search
* MLB PITCHf/x Data http://webusers.npl.illinois.edu/~a-nathan/pob/tracking.htm
* Baseball databank http://www.baseball-databank.org/
* Retrosheet http://www.retrosheet.org - both a file format for game data, and a source of historical data
* RetroSheet data in mysql format (downloadable) http://www.baseballheatmaps.com/retrosheet-database-download/
* Retrosheet Pitch Sequence Parser (for decomposing sequences into ball-strike count states) - https://github.com/mattdennewitz/retrosheet-pitch-sequences
* MLB.com GameDay data http://gd2.mlb.com/components/game/mlb/
* Baseball-Reference.com http://www.baseball-reference.com/about/sources.shtml
* Wells Oliver http://baseball.wellsoliver.com/
* Spatially Processesed (GIS Data) 2D and 3D MLB PITCHf/x data: https://arcg.is/11LLee
* ArcGIS for Developers: SDK downloads and Documentation https://developers.arcgis.com/
* ArcGIS API for Javascript: API documentation, Samples, Reference Documentation https://developers.arcgis.com/javascript/
* Sean Lahman's Baseball Database http://www.seanlahman.com/baseball-archive/statistics/
* Sean Lahman’s Open Source Sports http://www.seanlahman.com/open-source-sports/
* Lahman Baseball Database project http://lahman.r-forge.r-project.org/
* Erik Berg's xmlstats API https://erikberg.com/api
* MySportsFeeds API: https://www.mysportsfeeds.com
* Ruby Gameday API https://github.com/timothyf/gameday_api
* Python Gameday API https://github.com/zachpanz88/mlbgame
* From creator of http://www.fisherbaseball.com, stats visualizations and pitchfx data & https://github.com/timothyf/gameday_api "If using the Gameday API for your event, I would be happy to provide support." Tim timothyf@gmail.com Twitter: @tfisher @pitchfx
* Yahoo Fantasy Sports API - http://developer.yahoo.com/fantasysports/guide/
* David Keeney put the Baseball Databank into an online database, where you (anonymously even) can query the database with SQL. Look at: http://baseball.rdbhost.com
* Excellent source of updated baseball data http://www.baseballheatmaps.com/
* An exploration salaries and payrolls across MLB teams and players https://github.com/chelm/mlb_viz
* ~~Processes MLB GameDay XML to produce a boxscore object (Node.js) https://github.com/rockinghorse/gameday-boxscore~~
* ~~Retrieves data from MLB's GameDay servers (Node.js) https://github.com/rockinghorse/gameday-fetch~~
* Modifies the times listed on the MLB.tv media center to have times in your time zone of choice rather than Eastern Time https://github.com/int3h/MLB.tv-Time-Zones
* A Ruby library for retrieving current Major League Baseball players, managers, teams, divisions, and leagues. https://github.com/sferik/mlb
* PHP Gameday API inspired by Timothy Fisher's Ruby API https://github.com/jasonrhodes/GamedayAPI_PHP
* Python abstraction layer for MLB.com information API https://github.com/wellsoliver/py-mlb
* Python scripts to pull down MLB Gameday files into a database https://github.com/wellsoliver/py-gameday
* Perl modules to pull down MLB Gameday files into a MongoDB database https://github.com/kruser/atbat-mongodb (as used by https://github.com/kruser/pitchfx-site)
* Complete forkable stats website https://github.com/kruser/pitchfx-site
* Historical Stats of Japanese Baseball: https://docs.google.com/document/d/1SIOq8Px0Rrj_Cu3rwyGgHh00w8o685PC6m8S5N0uvnk/view?pli=1
* "Retrolahman" baseball database.  A Docker container of a CouchDB database combining both the historical Retrosheet data with the more stats-oriented data from Sean Lahman's baseball database.  1920 thru 2012.  http://blog.narf.io/retrolahman 
* PostgreSQL Retrosheet SQL cookbook - https://github.com/mattdennewitz/retrosheet-queries
* MARCEL projections in SQL - https://medium.com/@mattdennewitz/tinkering-with-marcel-pt-1-3cb1f9edb36d
* Introduction to pitchRx package http://cpsievert.github.io/pitchRx/ [source](https://github.com/cpsievert/pitchRx)
* openWAR https://baseballwithr.wordpress.com/2014/03/17/introduction-to-openwar/
* List of MLB players and their mlb.com ids listed under "MLBCODE": http://www.baseballprospectus.com/sortable/playerids/playerid_list.csv

### Ticket Pricing
* Stubhub https://developer.stubhub.com/store/
* Seatgeek http://platform.seatgeek.com/
* Ticketmaster (need access to their private api) http://stackoverflow.com/questions/15835558/ticketmaster-api-buy-tickets-within-website
* Ticketcity http://www.programmableweb.com/api/ticketcity

### Design
* Player Head Shots:
http://gdx.mlb.com/images/gameday/mugshots/mlb/545361@4x.jpg
* Player Action Shots:
http://losangeles.angels.mlb.com/images/players/525x330/545361.jpg 
* Team Style and Logo Properties - http://mlb.mlb.com/shared/properties/style/cle.json
* Team Colors - http://teamcolors.arc90.com/ - is a reference of HEX values for the brand colors of major league sporting teams. Includes SVG logos. Source on GitHub: https://github.com/arc90/teamcolors
* Team Logos as an icon font http://daigofuji.github.io/bbclub-font/
