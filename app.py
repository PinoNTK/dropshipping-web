from flask import Flask, render_template, jsonify, json, request, session, redirect, url_for

app = Flask(__name__)
def handleNullData(parent_node,child_node,json, nulltype):
    if parent_node in json:
        if isinstance(json[parent_node],list):
            for item in json[parent_node]:

                if child_node in item:
                    if item[child_node] is None or item[child_node] == "":
                        if nulltype=="string":
                            item[child_node] = "No " + child_node
                        if nulltype=="number":
                            item[child_node] = 0
                    if nulltype == "string":
                        item[child_node] = str(item[child_node])
                    if nulltype == "number":
                        item[child_node] = float(item[child_node])
        if isinstance(json[parent_node], dict):
            if child_node in json[parent_node]:
                if json[parent_node][child_node] is None or json[parent_node][child_node] == "":
                    if nulltype == "string":
                        json[parent_node][child_node] = "No " + child_node
                    if nulltype == "number":
                        json[parent_node][child_node] = 0
                if nulltype == "string":
                    json[parent_node][child_node] = str(json[parent_node][child_node])
                if nulltype == "number":
                    json[parent_node][child_node] = float(json[parent_node][child_node])

def nomalizingData(dataList):
    for product in dataList:
        if "images" not in product:
            product["images"]=["http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type.jpg"]
        if "images" in product and product["images"]==[]:
            product["images"]=["http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type.jpg"]
        handleNullData("quantity","buyableQtyPerCustomer",product,"number")
        handleNullData("price", "value", product, "string")
        handleNullData("rating", "value", product, "number")
        handleNullData("rating", "totalValue", product, "number")
        handleNullData("rating", "totalVote", product, "number")
        handleNullData("totalOrder", "value", product, "number")
        handleNullData("seller", "name", product, "string")
        handleNullData("seller", "link", product, "string")
    return jsonify(dataList)
@app.route("/")
def home():
    return render_template('category.html')
@app.route("/product_detail/<id>")
def producttemplate(id):
    return render_template('product.html')
@app.route("/list-products",methods=["POST"])
def getDefaultList():
    with open('data/ecomCrawler.json',encoding="utf-8-sig") as f:
        productList = json.load(f)
    myList = nomalizingData(productList)
    return myList
@app.route("/get-product-list",methods=["POST"])
def getItemByFiltering():
    info = request.get_data()
    with open('data/ecomCrawler.json',encoding="utf-8-sig") as f:
        productList = json.load(f)
    myList = nomalizingData(productList)
    return myList
@app.route("/get-hot-list",methods=["POST","GET"])
def getHotProducts():
    with open('data/hotProducts.json',encoding="utf-8-sig") as f:
        productList = json.load(f)
    myList = nomalizingData(productList)
    return myList


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8000, debug=True)

