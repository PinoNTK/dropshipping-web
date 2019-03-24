angular.module('myApp', [])
.controller('HomeCtrl', function ($scope, $http) {
    // setTimeout(function () {
	// 	$('#filter').trigger('click');
    // },1000)
	// $('#datetimepicker').datetimepicker();
	// gen list of products
	// var productList=[ { "_id": { "$oid": "5c77b508ee0357a9f6b68c61" }, "product_id": "en32949152144", "vendor": "aliexpress", "category": ["Home", "All Categories", "Toys & Hobbies", "Electronic Toys"], "crawledTime": 13, "images": [ "https://ae01.alicdn.com/kf/HLB1Ek60XE_rK1Rjy0Fcq6zEvVXa3/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1MonZXyDxK1Rjy1zcq6yGeXXaP/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1gQ6VXyrxK1RkHFCcq6AQCVXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1b_20XyzxK1RkSnaVq6xn9VXa1/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1I_DZXvfsK1RjSszbq6AqBXXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1eJf1XsvrK1Rjy0Feq6ATmVXaG/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg" ], "lastUpdate": { "$date": "2019-03-03T11:13:47.378+0000" }, "name": "Electronic Fish Swim Toy Battery Included Robotic Pet for Kids Bath Toy Fishing Tank Decorating Act Like Real Fish Dropshipping", "price": [ { "time": { "$date": "2019-02-28T17:16:40.603+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T17:28:37.746+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T18:12:24.589+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:02:11.710+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:03:09.433+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:04:09.882+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:05:52.207+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:09:13.549+0000" }, "value": 1.55, "currency": "USD" }, { "time": { "$date": "2019-03-02T18:40:52.209+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:48:25.938+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:49:22.755+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:50:09.620+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-03T11:13:47.377+0000" }, "value": "1.55", "currency": "USD" } ], "quantity": [ { "time": { "$date": "2019-02-28T17:16:40.601+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T17:28:37.744+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T18:12:24.586+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T21:02:11.707+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:03:09.430+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:04:09.879+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:05:52.203+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:09:13.546+0000" }, "buyableQtyPerCustomer": 4071 }, { "time": { "$date": "2019-03-02T18:40:52.206+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:48:25.936+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:49:22.753+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:50:09.618+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-03T11:13:47.375+0000" }, "buyableQtyPerCustomer": null } ], "rating": [ { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 } ], "seller": { "name": "Dreaming Toy Store", "link": "https://www.aliexpress.com/store/1368152" }, "totalOrder": [ { "value": 325, "time": { "$date": "2019-02-28T17:16:40.601+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T17:28:37.744+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T18:12:24.586+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:02:11.707+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:03:09.430+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:04:09.878+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:05:52.203+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:09:13.546+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:40:52.206+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:48:25.936+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:49:22.753+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:50:09.618+0000" } }, { "value": 345, "time": { "$date": "2019-03-03T11:13:47.374+0000" } } ], "url": "https://www.aliexpress.com/item/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act/32949152144.html", "unit": "piece" }, { "_id": { "$oid": "5c77b508ee0357a9f6b68c61" }, "product_id": "en32949152144", "vendor": "aliexpress", "category": ["Home", "All Categories", "Toys & Hobbies", "Electronic Toys"], "crawledTime": 13, "images": [ "https://ae01.alicdn.com/kf/HLB1Ek60XE_rK1Rjy0Fcq6zEvVXa3/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1MonZXyDxK1Rjy1zcq6yGeXXaP/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1gQ6VXyrxK1RkHFCcq6AQCVXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1b_20XyzxK1RkSnaVq6xn9VXa1/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1I_DZXvfsK1RjSszbq6AqBXXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1eJf1XsvrK1Rjy0Feq6ATmVXaG/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg" ], "lastUpdate": { "$date": "2019-03-03T11:13:47.378+0000" }, "name": "Electronic Fish Swim Toy Battery Included Robotic Pet for Kids Bath Toy Fishing Tank Decorating Act Like Real Fish Dropshipping", "price": [ { "time": { "$date": "2019-02-28T17:16:40.603+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T17:28:37.746+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T18:12:24.589+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:02:11.710+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:03:09.433+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:04:09.882+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:05:52.207+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:09:13.549+0000" }, "value": 1.55, "currency": "USD" }, { "time": { "$date": "2019-03-02T18:40:52.209+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:48:25.938+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:49:22.755+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:50:09.620+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-03T11:13:47.377+0000" }, "value": "1.55", "currency": "USD" } ], "quantity": [ { "time": { "$date": "2019-02-28T17:16:40.601+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T17:28:37.744+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T18:12:24.586+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T21:02:11.707+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:03:09.430+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:04:09.879+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:05:52.203+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:09:13.546+0000" }, "buyableQtyPerCustomer": 4071 }, { "time": { "$date": "2019-03-02T18:40:52.206+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:48:25.936+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:49:22.753+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:50:09.618+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-03T11:13:47.375+0000" }, "buyableQtyPerCustomer": null } ], "rating": [ { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 } ], "seller": { "name": "Dreaming Toy Store", "link": "https://www.aliexpress.com/store/1368152" }, "totalOrder": [ { "value": 325, "time": { "$date": "2019-02-28T17:16:40.601+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T17:28:37.744+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T18:12:24.586+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:02:11.707+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:03:09.430+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:04:09.878+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:05:52.203+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:09:13.546+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:40:52.206+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:48:25.936+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:49:22.753+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:50:09.618+0000" } }, { "value": 345, "time": { "$date": "2019-03-03T11:13:47.374+0000" } } ], "url": "https://www.aliexpress.com/item/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act/32949152144.html", "unit": "piece" }, { "_id": { "$oid": "5c77b508ee0357a9f6b68c61" }, "product_id": "en32949152144", "vendor": "aliexpress", "category": ["Home", "All Categories", "Toys & Hobbies", "Electronic Toys"], "crawledTime": 13, "images": [ "https://ae01.alicdn.com/kf/HLB1Ek60XE_rK1Rjy0Fcq6zEvVXa3/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1MonZXyDxK1Rjy1zcq6yGeXXaP/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1gQ6VXyrxK1RkHFCcq6AQCVXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1b_20XyzxK1RkSnaVq6xn9VXa1/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1I_DZXvfsK1RjSszbq6AqBXXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1eJf1XsvrK1Rjy0Feq6ATmVXaG/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg" ], "lastUpdate": { "$date": "2019-03-03T11:13:47.378+0000" }, "name": "Electronic Fish Swim Toy Battery Included Robotic Pet for Kids Bath Toy Fishing Tank Decorating Act Like Real Fish Dropshipping", "price": [ { "time": { "$date": "2019-02-28T17:16:40.603+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T17:28:37.746+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T18:12:24.589+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:02:11.710+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:03:09.433+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:04:09.882+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:05:52.207+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:09:13.549+0000" }, "value": 1.55, "currency": "USD" }, { "time": { "$date": "2019-03-02T18:40:52.209+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:48:25.938+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:49:22.755+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:50:09.620+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-03T11:13:47.377+0000" }, "value": "1.55", "currency": "USD" } ], "quantity": [ { "time": { "$date": "2019-02-28T17:16:40.601+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T17:28:37.744+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T18:12:24.586+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T21:02:11.707+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:03:09.430+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:04:09.879+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:05:52.203+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:09:13.546+0000" }, "buyableQtyPerCustomer": 4071 }, { "time": { "$date": "2019-03-02T18:40:52.206+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:48:25.936+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:49:22.753+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:50:09.618+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-03T11:13:47.375+0000" }, "buyableQtyPerCustomer": null } ], "rating": [ { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 } ], "seller": { "name": "Dreaming Toy Store", "link": "https://www.aliexpress.com/store/1368152" }, "totalOrder": [ { "value": 325, "time": { "$date": "2019-02-28T17:16:40.601+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T17:28:37.744+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T18:12:24.586+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:02:11.707+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:03:09.430+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:04:09.878+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:05:52.203+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:09:13.546+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:40:52.206+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:48:25.936+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:49:22.753+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:50:09.618+0000" } }, { "value": 345, "time": { "$date": "2019-03-03T11:13:47.374+0000" } } ], "url": "https://www.aliexpress.com/item/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act/32949152144.html", "unit": "piece" }, { "_id": { "$oid": "5c77b508ee0357a9f6b68c61" }, "product_id": "en32949152144", "vendor": "aliexpress", "category": ["Home", "All Categories", "Toys & Hobbies", "Electronic Toys"], "crawledTime": 13, "images": [ "https://ae01.alicdn.com/kf/HLB1Ek60XE_rK1Rjy0Fcq6zEvVXa3/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1MonZXyDxK1Rjy1zcq6yGeXXaP/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1gQ6VXyrxK1RkHFCcq6AQCVXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1b_20XyzxK1RkSnaVq6xn9VXa1/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1I_DZXvfsK1RjSszbq6AqBXXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1eJf1XsvrK1Rjy0Feq6ATmVXaG/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg" ], "lastUpdate": { "$date": "2019-03-03T11:13:47.378+0000" }, "name": "Electronic Fish Swim Toy Battery Included Robotic Pet for Kids Bath Toy Fishing Tank Decorating Act Like Real Fish Dropshipping", "price": [ { "time": { "$date": "2019-02-28T17:16:40.603+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T17:28:37.746+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T18:12:24.589+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:02:11.710+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:03:09.433+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:04:09.882+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:05:52.207+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:09:13.549+0000" }, "value": 1.55, "currency": "USD" }, { "time": { "$date": "2019-03-02T18:40:52.209+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:48:25.938+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:49:22.755+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:50:09.620+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-03T11:13:47.377+0000" }, "value": "1.55", "currency": "USD" } ], "quantity": [ { "time": { "$date": "2019-02-28T17:16:40.601+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T17:28:37.744+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T18:12:24.586+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T21:02:11.707+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:03:09.430+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:04:09.879+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:05:52.203+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:09:13.546+0000" }, "buyableQtyPerCustomer": 4071 }, { "time": { "$date": "2019-03-02T18:40:52.206+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:48:25.936+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:49:22.753+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:50:09.618+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-03T11:13:47.375+0000" }, "buyableQtyPerCustomer": null } ], "rating": [ { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 } ], "seller": { "name": "Dreaming Toy Store", "link": "https://www.aliexpress.com/store/1368152" }, "totalOrder": [ { "value": 325, "time": { "$date": "2019-02-28T17:16:40.601+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T17:28:37.744+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T18:12:24.586+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:02:11.707+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:03:09.430+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:04:09.878+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:05:52.203+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:09:13.546+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:40:52.206+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:48:25.936+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:49:22.753+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:50:09.618+0000" } }, { "value": 345, "time": { "$date": "2019-03-03T11:13:47.374+0000" } } ], "url": "https://www.aliexpress.com/item/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act/32949152144.html", "unit": "piece" }, { "_id": { "$oid": "5c77b508ee0357a9f6b68c61" }, "product_id": "en32949152144", "vendor": "aliexpress", "category": ["Home", "All Categories", "Toys & Hobbies", "Electronic Toys"], "crawledTime": 13, "images": [ "https://ae01.alicdn.com/kf/HLB1Ek60XE_rK1Rjy0Fcq6zEvVXa3/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1MonZXyDxK1Rjy1zcq6yGeXXaP/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1gQ6VXyrxK1RkHFCcq6AQCVXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1b_20XyzxK1RkSnaVq6xn9VXa1/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1I_DZXvfsK1RjSszbq6AqBXXaT/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg", "https://ae01.alicdn.com/kf/HLB1eJf1XsvrK1Rjy0Feq6ATmVXaG/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act.jpg" ], "lastUpdate": { "$date": "2019-03-03T11:13:47.378+0000" }, "name": "Electronic Fish Swim Toy Battery Included Robotic Pet for Kids Bath Toy Fishing Tank Decorating Act Like Real Fish Dropshipping", "price": [ { "time": { "$date": "2019-02-28T17:16:40.603+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T17:28:37.746+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T18:12:24.589+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:02:11.710+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:03:09.433+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:04:09.882+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:05:52.207+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-02-28T21:09:13.549+0000" }, "value": 1.55, "currency": "USD" }, { "time": { "$date": "2019-03-02T18:40:52.209+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:48:25.938+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:49:22.755+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-02T18:50:09.620+0000" }, "value": "1.55", "currency": "USD" }, { "time": { "$date": "2019-03-03T11:13:47.377+0000" }, "value": "1.55", "currency": "USD" } ], "quantity": [ { "time": { "$date": "2019-02-28T17:16:40.601+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T17:28:37.744+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T18:12:24.586+0000" }, "buyableQtyPerCustomer": "4073" }, { "time": { "$date": "2019-02-28T21:02:11.707+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:03:09.430+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:04:09.879+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:05:52.203+0000" }, "buyableQtyPerCustomer": "4071" }, { "time": { "$date": "2019-02-28T21:09:13.546+0000" }, "buyableQtyPerCustomer": 4071 }, { "time": { "$date": "2019-03-02T18:40:52.206+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:48:25.936+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:49:22.753+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-02T18:50:09.618+0000" }, "buyableQtyPerCustomer": null }, { "time": { "$date": "2019-03-03T11:13:47.375+0000" }, "buyableQtyPerCustomer": null } ], "rating": [ { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 40 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 }, { "value": 5.0, "totalValue": 5.0, "totalVote": 41 } ], "seller": { "name": "Dreaming Toy Store", "link": "https://www.aliexpress.com/store/1368152" }, "totalOrder": [ { "value": 325, "time": { "$date": "2019-02-28T17:16:40.601+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T17:28:37.744+0000" } }, { "value": 325, "time": { "$date": "2019-02-28T18:12:24.586+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:02:11.707+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:03:09.430+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:04:09.878+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:05:52.203+0000" } }, { "value": 327, "time": { "$date": "2019-02-28T21:09:13.546+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:40:52.206+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:48:25.936+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:49:22.753+0000" } }, { "value": 351, "time": { "$date": "2019-03-02T18:50:09.618+0000" } }, { "value": 345, "time": { "$date": "2019-03-03T11:13:47.374+0000" } } ], "url": "https://www.aliexpress.com/item/Electronic-Fish-Swim-Toy-Battery-Included-Robotic-Pet-for-Kids-Bath-Toy-Fishing-Tank-Decorating-Act/32949152144.html", "unit": "piece" } ]
    //
    //
	// for(product in productList){
	// 	var myitem=
	// 	'<div class="col-xl-4 col-md-6 grid-item new">'+
	// 		'<div class="product">'+
	// 			'<div class="product_image" style="max-height: 312px;min-height: 312px; cursor: pointer"><img style="max-height: 312px;min-height: 312px" src="'+productList[product]["images"][0]+'" alt=""></div>'+
	// 				'<div class="product_content">'+
	// 					'<div class="product_info d-flex flex-row align-items-start justify-content-start">'+
	// 						'<div>'+
	// 							'<div>'+
	// 							'</div>'+
	// 						'</div>'+
	// 						'<div class="ml-auto text-right">'+
	// 							'<div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>'+
	// 						'</div>'+
	// 					'</div>'+
	// 					'<div class="product_buttons">'+
	// 						'<div class="text-right d-flex flex-row align-items-start justify-content-start">'+
	// 							'<div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">'+
	// 								'<div><div><img src="static/images/heart_2.svg" class="svg" alt=""><div>+</div></div></div>'+
	// 							'</div>'+
	// 							'<div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">'+
	// 								'<div><div><img src="static/images/cart.svg" class="svg" alt=""><div>+</div></div></div>'+
	// 							'</div>'+
	// 						'</div>'+
	// 					'</div>'+
	// 				'</div>'+
	// 			'</div>'+
	// 		'</div>'+
	// 	'</div>';
	//     $('#product_list').append(myitem);

	// }
	// $('.product_image').each(function (index,e) {
	// 	$(this).click(function (event) {
	// 		product_info = productList[index]
	// 		console.log(product_info)
	// 		$http({
	// 			method: 'POST',
	// 			url: '/product_details',
	// 			data: JSON.stringify(product_info)
	// 		}).then(function (response) {
	// 			console.log(response)
	// 			location.href ="/product_detail"
	// 		}, function (error) {
	// 			console.log(error);
    //
	// 		});
    //
	// 	})
	// })
	$('#btnSearch').click(function () {
		var time=$('#datetimepicker').val();
		var numoforder=$('#numoforders').val();
		console.log(time,numoforder)
		var params=[{'time':time,'#oforder':numoforder}]

    })
});