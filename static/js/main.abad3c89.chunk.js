(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{186:function(e,t,n){e.exports=n(388)},191:function(e,t,n){},386:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(25),o=n.n(r),s=(n(191),n(8)),c=n(14),l=n(11),u=n(10),m=n(62),p=n(164),d=n(12),h=[{name:"RSVP",value:5},{name:"Total Spots",value:10}],_=["#FFBB28","#FF8042"],v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleItemClick=function(){e.props.itemToShow===e.props.event.id?e.props.showItem(-1):e.props.showItem(e.props.event.id)},e.getPieData=function(t){var n=e.props.event.rsvp_limit;return[{name:"Attending",value:e.props.event.yes_rsvp_count},{name:"Spots Available",value:n}]},e.stripTags=function(e){if(e)return e.toString().replace(/(<([^>]+)>)/gi,"")},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(m.a,{className:"eventItem my-2 bg-gradient-dark border border-dark mx-auto col-md-6"},i.a.createElement(m.a.Title,{className:"eventTitle text-left my-2"},this.props.event.name),i.a.createElement(m.a.Body,{className:"border-top"},i.a.createElement("h5",{className:"text-left"},this.props.event.local_date+" "+this.props.event.local_time),i.a.createElement("h6",{className:"text-left"},i.a.createElement("u",null,i.a.createElement("strong",null,this.props.event.group.name))),this.props.event.rsvp_limit&&this.props.event.yes_rsvp_count?i.a.createElement(d.f,{height:100},i.a.createElement(d.e,null,i.a.createElement(d.d,{data:this.getPieData(),cx:55,cy:45,labelLine:!1,outerRadius:40,fill:"#8884d8"},h.map((function(e,t){return i.a.createElement(d.b,{key:t,fill:_[t%_.length]})}))),i.a.createElement(d.i,null),i.a.createElement(d.c,{align:"left",verticalAlign:"middle",layout:"vertical",height:36}))):null,i.a.createElement(p.a,{className:"collapseElement mt-4",in:this.props.itemToShow===this.props.event.id},i.a.createElement("p",{className:"hidden"},this.props.event.venue?"Hosted By: ":"",this.props.event.venue?this.props.event.venue.name:"",this.props.event.venue?i.a.createElement("br",null):null,this.props.event.venue?this.props.event.venue.address_1:"",this.props.event.venue?i.a.createElement("br",null):null,this.props.event.venue?i.a.createElement("br",null):null,this.props.event.description?this.stripTags(this.props.event.description):"No Further details are available! Sorry!")),i.a.createElement("button",{className:"details btn ml-auto d-block mt-3 btn-outline-dark",onClick:function(){return e.handleItemClick()}},this.props.itemToShow===this.props.event.id?"Hide Details":"Show Details")))}}]),n}(a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).showEvent=function(t){e.setState({shownEvent:t})},e.state={shownEvent:0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"EventList list-group"},this.props.events.map((function(t){return i.a.createElement("li",{className:"Event",key:t.id},i.a.createElement(v,{event:t,refs:"child",itemToShow:e.state.shownEvent,showItem:function(t){return e.showEvent(t)}}))})))}}]),n}(a.Component),f=n(22),b=n.n(f),y=n(45),w=n(61),E=n.n(w),k=[{created:1574974495e3,duration:108e5,fee:{accepts:"paypal",amount:15,currency:"EUR",description:"",label:"Price",required:!0},id:"266813030",name:"Agile Game Night #42 - Murmelbahnspiel",rsvp_limit:15,date_in_series_pattern:!1,status:"upcoming",time:1594917e6,local_date:"2020-07-16",local_time:"18:30",updated:1582196146e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,is_online_event:!1,group:{created:1471362725e3,name:"Agile Game Nights",id:20321716,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Agile-Game-Night",who:"Agile Gamer",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Agile-Game-Night/events/266813030/",description:"<p>This is a description</p>",visibility:"public",member_pay_fee:!1},{created:1580464907e3,duration:72e5,id:"bslqrrybcjbtb",name:"Muenchner Brainstormers Club ONLINE MEETING",date_in_series_pattern:!1,status:"upcoming",time:15922413e5,local_date:"2020-06-15",local_time:"19:15",updated:1587368987e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:26903444,name:"Online",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Online Adresse noch nicht verf\xfcgbar",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1444592791e3,name:"Toastmasters Clubs in and around Munich",id:19017360,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Toastmasters-Clubs-in-and-around-Munich",who:"Toastmaster",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Toastmasters-Clubs-in-and-around-Munich/events/bslqrrybcjbtb/",description:"Second Description",how_to_find_us:"Link per E-Mail an vp-pr@munich-brainstormers.de anfordern. Camera ist erforderlich. ",visibility:"public",member_pay_fee:!1},{created:1585760393e3,duration:54e5,id:"twwfrrybchblc",name:"offene Meditationsgruppe LIVE STREAM - M\xfcnchen",date_in_series_pattern:!1,status:"upcoming",time:1590687e6,local_date:"2020-05-28",local_time:"19:30",updated:1585760393e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:7,venue:{id:26904128,name:"https://pruffme.com/landing/u1359261/tmp1584302153",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"www",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga LIVE WEBCASTS \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/twwfrrybchblc/",description:"Third Description",how_to_find_us:"https://pruffme.com/landing/u1359261/tmp1584302153",visibility:"public",member_pay_fee:!1},{created:158576049e4,duration:54e5,id:"fxwfrrybchbmc",name:"+Free Meditation & Yoga LIVE STREAM just show up \u2013 we start at 7.30pm Fridays",date_in_series_pattern:!1,status:"upcoming",time:15907734e5,local_date:"2020-05-29",local_time:"19:30",updated:158576049e4,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:7,venue:{id:26904128,name:"https://pruffme.com/landing/u1359261/tmp1584302153",lat:48.131248474121094,lon:11.589078903198242,repinned:!0,address_1:"www",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga LIVE WEBCASTS \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/fxwfrrybchbmc/",description:"Fourth Description",how_to_find_us:"https://pruffme.com/landing/u1359261/tmp1584302153",visibility:"public",member_pay_fee:!1},{created:157296736e4,duration:72e5,id:"jnmwkrybckbkc",name:"Last Night in Montreal by Emily St. John Mandel",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:1595871e6,local_date:"2020-07-27",local_time:"19:30",updated:158262509e4,utc_offset:72e5,waitlist_count:4,yes_rsvp_count:10,is_online_event:!1,group:{created:1527594184e3,name:"M\xfcnchen English Book Club Meetup",id:28635492,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"meetup-group-ZmaZRkRm",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/meetup-group-ZmaZRkRm/events/jnmwkrybckbkc/",description:"Fifth Description",visibility:"public",member_pay_fee:!1},{created:1522694856e3,duration:108e5,id:"lkgknpybcjbjc",name:"Deutsch-Japanischer\xad Stammtisch",date_in_series_pattern:!1,status:"upcoming",time:15931908e5,local_date:"2020-06-26",local_time:"19:00",updated:1522694856e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,is_online_event:!1,group:{created:1512221367e3,name:"Deutsch-Japanischer Stammtisch",id:26763059,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"deutsch-japanischer-stammtisch",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/deutsch-japanischer-stammtisch/events/lkgknpybcjbjc/",description:"Sixth Description",visibility:"public",member_pay_fee:!1},{created:1589958011e3,duration:36e5,id:"270761222",name:"(Un-)Glaubliches M\xfcnchen - erste Online Stadtf\xfchrung",date_in_series_pattern:!1,status:"upcoming",time:15906033e5,local_date:"2020-05-27",local_time:"20:15",updated:1590045095e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:6,is_online_event:!1,group:{created:1583910278e3,name:"Die M\xfcnchen Entdecker",id:33538673,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Lebenszeit-Events",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Lebenszeit-Events/events/270761222/",description:"Seventh Description",visibility:"public",member_pay_fee:!1},{created:1589447319e3,duration:36e5,id:"270643565",name:"Online: IBM Regional Club - THINK comes to you!",date_in_series_pattern:!1,status:"upcoming",time:1590588e6,local_date:"2020-05-27",local_time:"16:00",updated:1589974457e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:18,is_online_event:!1,group:{created:1574259198e3,name:"IBM Regional Club @S\xfcd",id:33031185,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"IBM-Regional-Club-Sud",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/IBM-Regional-Club-Sud/events/270643565/",description:"Eighth Description",visibility:"public",pro_is_email_shared:!1,member_pay_fee:!1},{created:1588172469e3,duration:72e5,id:"270335985",name:"Ulysses - James Joyce",date_in_series_pattern:!1,status:"upcoming",time:15923268e5,local_date:"2020-06-16",local_time:"19:00",updated:1588174183e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:18,is_online_event:!1,group:{created:1520326534e3,name:"The Classic-Novels-You-Should-Have-Read-Already Bookclub",id:27741411,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Classic-Literature-for-the-Dramatically-Stunted",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Classic-Literature-for-the-Dramatically-Stunted/events/270335985/",description:"Ninth Description",visibility:"public",member_pay_fee:!1},{local_time:"19:15",local_date:"2020-06-08",link:"https://www.meetup.com/PMI-SGC-English-Speaking-Meetings-Munich/events/270869675/",visibility:"public_limited",group:{created:1524816297e3,name:"PMI SGC English Speaking Meetings Munich",id:28298171,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"PMI-SGC-English-Speaking-Meetings-Munich",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:4,duration:54e5,time:15916365e5,utc_offset:72e5,name:"Mergers & Acquisition - How to manage M&A projects",id:"270869675"},{created:1586879743e3,duration:72e5,id:"kwvmrrybcjbmc",name:"Evening Write In",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15934482e5,local_date:"2020-06-29",local_time:"18:30",updated:1586879743e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:2,is_online_event:!1,group:{created:1540275214e3,name:"Happy Writing: Munich",id:30375868,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Happy-Writing-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Happy-Writing-Munich/events/kwvmrrybcjbmc/",description:"Tenth Description",visibility:"public",member_pay_fee:!1},{created:157296736e4,duration:72e5,id:"jnmwkrybcjbdc",name:"The Water Cure by Sophie Mackintosh",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:1592847e6,local_date:"2020-06-22",local_time:"19:30",updated:1582624767e3,utc_offset:72e5,waitlist_count:3,yes_rsvp_count:10,is_online_event:!1,group:{created:1527594184e3,name:"M\xfcnchen English Book Club Meetup",id:28635492,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"meetup-group-ZmaZRkRm",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/meetup-group-ZmaZRkRm/events/jnmwkrybcjbdc/",description:"<p>Imagine a world very close to our own: where women are not safe in their bodies, where desperate measures are required to raise a daughter. This is the story of Grace, Lia and Sky, kept apart from the world for their own good and taught the terrible things that every woman must learn about love. And it is the story of the men who come to find them - three strangers washed up by the sea, their gazes hungry and insistent, trailing desire and destruction in their wake.</p> <p>Hypnotic and compulsive, The Water Cure is a fever dream, a blazing vision of suffering, sisterhood and transformation. Sophie Mackintosh brings us face to face with the brutality of love, demanding to know the price of survival in a hostile world.</p> <p>We typically decide on the next book 1-2 months before.<br/>The meeting is at my house in Arabellapark, I will share theexact address a day or so before the meet up. I will provide tea and nibbles, you provide the questions/ thoughts/ insights.<br/>Looking forward to meeting you!</p> ",visibility:"public",member_pay_fee:!1},{created:1590345768e3,duration:9e6,id:"270850512",name:"Composition 101 (Online Workshop)",date_in_series_pattern:!1,status:"upcoming",time:15909138e5,local_date:"2020-05-31",local_time:"10:30",updated:1590345768e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:13,is_online_event:!1,group:{created:1500930561e3,name:"Photography Workshops Munich",id:25119735,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-Photography-Workshops",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munchen-Photography-Workshops/events/270850512/",description:"Eleventh Description",visibility:"public",member_pay_fee:!1},{created:1574974457e3,duration:108e5,fee:{accepts:"paypal",amount:15,currency:"EUR",description:"",label:"Price",required:!0},id:"266812945",name:"Agile Game Night #41 - Lego Serious Play",rsvp_limit:9,date_in_series_pattern:!1,status:"upcoming",time:15929298e5,local_date:"2020-06-23",local_time:"18:30",rsvp_close_offset:"PT24H",updated:1589868374e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:8,is_online_event:!1,group:{created:1471362725e3,name:"Agile Game Nights",id:20321716,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Agile-Game-Night",who:"Agile Gamer",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Agile-Game-Night/events/266812945/",description:"Twelfth Description",visibility:"public",member_pay_fee:!1},{created:1589874181e3,duration:54e5,id:"270740826",name:"Webinar: Reflexion in Corona-Zeiten - Henley Coaching und Reflexion Community",rsvp_limit:70,date_in_series_pattern:!1,status:"upcoming",time:15906528e5,local_date:"2020-05-28",local_time:"10:00",updated:15898742e5,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:14,venue:{id:26904559,name:"Leadership Events Zoom-Meeting",lat:48.13512420654297,lon:11.58198070526123,repinned:!1,address_1:"Virtuell",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1510684582e3,name:"Leadership Events - M\xfcnchen",id:26598849,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Leadership-Events-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Leadership-Events-Munchen/events/270740826/",description:"Thirteenth Description",visibility:"public",member_pay_fee:!1},{created:1584390889e3,duration:144e5,id:"269466550",name:"3. agiles PM-Trendforum 2020 (digital) am 25.06.2020",date_in_series_pattern:!1,status:"upcoming",time:15931008e5,local_date:"2020-06-25",local_time:"18:00",updated:1587540743e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:52,is_online_event:!1,group:{created:1430647334e3,name:"Projektmanagement Meetup Roundtable",id:18574027,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Projektmanagement-Meetup-Roundtable",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Projektmanagement-Meetup-Roundtable/events/269466550/",description:"Fourteenth Description",visibility:"public",member_pay_fee:!1},{created:1589874395e3,duration:54e5,id:"270740857",name:"Webinar: Reflection in times of Corona - Henley Coaching & Reflection Community",rsvp_limit:70,date_in_series_pattern:!1,status:"upcoming",time:15912576e5,local_date:"2020-06-04",local_time:"10:00",updated:1589874428e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:26904559,name:"Leadership Events Zoom-Meeting",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Virtuell",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1510684582e3,name:"Leadership Events - M\xfcnchen",id:26598849,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Leadership-Events-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Leadership-Events-Munchen/events/270740857/",description:"Numbering them is getting really old",visibility:"public",member_pay_fee:!1},{created:1586879743e3,duration:72e5,id:"kwvmrrybcjbcb",name:"Evening Write In",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:1591029e6,local_date:"2020-06-01",local_time:"18:30",updated:1586879743e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:7,is_online_event:!1,group:{created:1540275214e3,name:"Happy Writing: Munich",id:30375868,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Happy-Writing-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Happy-Writing-Munich/events/kwvmrrybcjbcb/",description:"This is absolutely mind numbing",visibility:"public",member_pay_fee:!1},{created:1586879743e3,duration:72e5,id:"kwvmrrybcjbtb",name:"Evening Write In",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15922386e5,local_date:"2020-06-15",local_time:"18:30",updated:1586879743e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,is_online_event:!1,group:{created:1540275214e3,name:"Happy Writing: Munich",id:30375868,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Happy-Writing-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Happy-Writing-Munich/events/kwvmrrybcjbtb/",description:"Why wont the json tool just work.",visibility:"public",member_pay_fee:!1},{created:1566885214e3,duration:72e5,id:"264333822",name:"Mystery of the Blue Train : Agatha Christie",date_in_series_pattern:!1,status:"upcoming",time:15973353e5,local_date:"2020-08-13",local_time:"18:15",updated:1590248275e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,is_online_event:!1,group:{created:1503946106e3,name:"One Dark and Stormy Night : Book Club",id:25682270,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Dark-And-Stormy-Night",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Dark-And-Stormy-Night/events/264333822/",description:"<p>Let\u2019s do a fun Agatha Christie for the depths of summer :)</p> <p>\u201cYou could, perhaps, love a thief, Mademoiselle, but not a murderer!\u201d \u2014 Poirot</p> ",visibility:"public",member_pay_fee:!1}];function M(){return S.apply(this,arguments)}function S(){return(S=Object(y.a)(b.a.mark((function e(){var t,n,a,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),n=localStorage.getItem("last_saved_time"),t){e.next=9;break}if(a=new URLSearchParams(window.location.search),i=a.get("code")){e.next=8;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=idsfluub4f67abhng9nv7do8f1&response_type=code&redirect_uri=https://arcalise08.github.io/meetup-app/",e.abrupt("return",null);case 8:return e.abrupt("return",j("get",i));case 9:if(!(t&&Date.now()-n<36e5)){e.next=13;break}return e.abrupt("return",t);case 13:return r=localStorage.getItem("refresh_token"),e.abrupt("return",j("renew",r));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return N.apply(this,arguments)}function N(){return(N=Object(y.a)(b.a.mark((function e(t,n){var a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://di0lcghnw7.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://di0lcghnw7.execute-api.us-east-1.amazonaws.com/dev/api/refreshToken/"+n),console.log(a),console.log(n),e.next=5,E.a.get(a);case 5:return i=e.sent,localStorage.setItem("access_token",i.data.access_token),localStorage.setItem("refresh_token",i.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",i.data.access_token);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(y.a)(b.a.mark((function e(t){var n,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,M();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,E.a.get(a);case 9:return i=e.sent,e.abrupt("return",i.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(y.a)(b.a.mark((function e(t,n){var a,i,r,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",k);case 2:if(navigator.onLine){e.next=5;break}return a=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(a));case 5:return e.next=7,M();case 7:if(!(i=e.sent)){e.next=17;break}return r="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(r+="&lat="+t+"&lon="+n),e.next=13,E.a.get(r);case 13:return o=e.sent,(s=o.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(s)),e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Alert"},i.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(O),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(O),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(O),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),""===t.target.value?e.setState({showSuggestion:!1}):function(e){return z.apply(this,arguments)}(n).then((function(t){e.setState({showSuggestion:!0,suggestions:t}),n.length>=3&&0===t.length?e.setState({infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({infoText:""})})),navigator.onLine?e.setState({offline:""}):e.setState({offline:"Cannot perform search while Internet is disconnected. Please try again later!"})},e.handleOnClicked=function(t,n,a){e.setState({query:t,showSuggestion:!1}),e.props.updateEvents(n,a)},e.state={query:"",showSuggestion:!1,suggestions:[],infoText:"",offline:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"CitySearch"},i.a.createElement("h1",{className:"display-4 mb-5"},"Search for events near any city!"),i.a.createElement(G,{text:this.state.offline}),i.a.createElement("input",{type:"text",className:"city mx-auto form-control mb-3 col-sm-6",onChange:this.handleInputChanged,value:this.state.query}),i.a.createElement(x,{text:this.state.infoText}),i.a.createElement("ul",{className:"suggestions position-absolute p-0 "},this.state.showSuggestion?this.state.suggestions.map((function(t){return i.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleOnClicked(t.name_string,t.lat,t.lon)},className:"form-control list-group col-sm-6 mx-auto"},t.name_string)})):null))}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleNumberChange=function(t){e.props.eventsNum(t.target.value),e.setState({numberToShow:t.target.value}),t.target.value<=0?e.setState({showError:"Number should be greater than 0"}):e.setState({showError:""})},e.state={numberToShow:0,showError:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.eventsNum,e.currentNum);return i.a.createElement("div",{className:"eventNumber"},i.a.createElement("small",null,"Events to show",i.a.createElement("br",null)),i.a.createElement("input",{className:"eventNumberInput form-control mx-auto mb-3 col-3",type:"number",placeholder:t,onChange:this.handleNumberChange,style:{textAlign:"center"}}),i.a.createElement(T,{text:this.state.showError}))}}]),n}(a.Component),B=n(162),W=n.n(B),D=(n(386),n(387),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).countEvents=function(t){for(var n=0,a=0;a<e.state.events.length;a+=1)e.state.events[a].local_date===t&&(n+=1);return n},e.getData=function(){for(var t=[],n=W()(),a=0;a<7;a+=1){n.add(1,"days");var i=n.format("YYYY-MM-DD"),r=e.countEvents(i);t.push({date:i,number:r})}return t},e.updateEventsNumber=function(t){e.setState({eventsNumber:t});for(var n=[],a=t>e.state.events.length?e.state.events.length:t,i=0;i<a;i++)n.push(e.state.events[i]);e.state.mounted&&e.setState({eventsToShow:n})},e.updateEvents=function(t,n){(function(e,t){return C.apply(this,arguments)})(t,n).then((function(t){e.state.mounted&&(e.setState({events:t}),e.updateEventsNumber(e.state.eventsNumber))}))},e.state={eventsNumber:30,events:[],eventsToShow:[],mounted:!1},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.updateEvents()}},{key:"componentWillUnmount",value:function(){this.setState({mounted:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(I,{updateEvents:this.updateEvents}),i.a.createElement(A,{currentNum:this.state.eventsNumber,eventsNum:function(t){return e.updateEventsNumber(t)}}),i.a.createElement("h5",null,"Upcoming Events"),i.a.createElement("div",{className:"chartContainer mx-auto col-md-6"},i.a.createElement(d.f,{height:300},i.a.createElement(d.h,{margin:{top:20,right:20,bottom:20,left:-10}},i.a.createElement(d.a,null),i.a.createElement(d.j,{type:"category",dataKey:"date",name:"date"}),i.a.createElement(d.k,{type:"number",dataKey:"number",name:"number of events"}),i.a.createElement(d.i,{cursor:{strokeDasharray:"3 3"}}),i.a.createElement(d.g,{data:this.getData(),fill:"#8884d8"})))),i.a.createElement(g,{events:this.state.eventsToShow}))}}]),n}(a.Component)),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(163);o.a.render(i.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup-app","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}(),R.config("4d8a5eee79344a46b5fb061509fa5fc7").install()}},[[186,1,2]]]);
//# sourceMappingURL=main.abad3c89.chunk.js.map