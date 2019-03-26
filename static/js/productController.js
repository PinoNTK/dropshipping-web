// $(document).ready(function () {
//     jQuery.ajax({
//         url: '/list-products',
//         type: "POST",
//         processData: false,
//         contentType: "application/json",
//         success: function (result) {
//             console.log(result)
//             productList=result
//             console.log(productList)
//             var url = window.location.pathname;
//             var product_id = url.split("/")[2]
//             var id_index=10;
//             console.log(product_id)
//             for(product in productList){
//                 if(productList[product]["product_id"]==product_id.toString()){
//                     console.log("found",productList[product]["product_id"])
//                     id_index=productList.indexOf(productList[product])
//                 }
//             }
//             console.log(id_index)
//             $('.product_name').text(productList[id_index]['name'])
//             for(item in productList[id_index]["category"]){
//                 $('.product_category').append(productList[id_index]["category"][item]+' | ')
//             }
//             $('#prourl').attr("href", productList[id_index]['url']);
//             for(img in productList[id_index]['images']){
//                 var big_item = '<li><img src="'+productList[id_index]['images'][img]+'" /></li>'
//                 var small_item = '<li><div><img src="'+productList[id_index]['images'][img]+'"/></div></li>'
//                 $('#bigslide').append(big_item)
//                 $('#smallslide').append(small_item)
//             }
//             var timeList=[]
//             var priceList=[]
//             var currencyList=[]
//             for(price in productList[id_index]['price']){
//                 timeList.push(productList[id_index]['price'][price]['time']['$date'])
//                 priceList.push(productList[id_index]['price'][price]['value'])
//                 currencyList.push(productList[id_index]['price'][price]['currency'])
//             }
//             console.log(timeList,priceList,currencyList)
//             var normalizedPrice=[]; for(i in priceList){normalizedPrice.push(parseFloat(priceList[i]))}; console.log(normalizedPrice)
//             var normalizedTime=[]; for(i in timeList){normalizedTime.push(timeList[i].split("+")[0])}; console.log(normalizedTime)
//             console.log(normalizedPrice, normalizedTime)
//             // chart
//             var ctx = document.getElementById('myChart').getContext('2d');
//             var myChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: normalizedTime,
//                     datasets: [{
//                         label: '# Price ('+currencyList[0]+')',
//                         data: normalizedPrice,
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)'
//                         ],
//                         borderColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)'
//                         ],
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero: true
//                             }
//                         }]
//                     }
//                 }
//             });
//         }
//
//     })
//
//
//
//
// });