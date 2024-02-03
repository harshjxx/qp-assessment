# qp-assessment
question proassignment

POSTMAN API collection

{
	"info": {
		"_postman_id": "4edc94c0-9ac0-45c1-b6d1-991fde08b921",
		"name": "qp_api",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "7282734"
	},
	"item": [
		{
			"name": "add grocery items",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "role",
						"value": "admin",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "[{\n    \"grocery_name\": \"apple\",\n    \"grocery_price\": 1\n},\n{\n    \"grocery_name\": \"pineapple\",\n    \"grocery_price\": 1\n}]",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/addgroceries",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"addgroceries"
					]
				},
				"description": "add single or bulk items"
			},
			"response": []
		},
		{
			"name": "get grocery items",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "role",
						"value": "admin",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\":\"harshavardhan\",\n    \"password\": \"12345678\",\n    \"email\": \"hj@gm.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000"
				},
				"description": "list of grocaries"
			},
			"response": []
		},
		{
			"name": "add users",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "role",
						"value": "admin",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\":\"harshavardhan\",\n    \"password\": \"12345678\",\n    \"email\": \"hj@gm.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/createuser",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"createuser"
					]
				},
				"description": "add users;"
			},
			"response": []
		},
		{
			"name": "remove grocery items",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "role",
						"value": "admin",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"groceryIds\":[1,2,3]}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/removegroceryitems",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"removegroceryitems"
					]
				}
			},
			"response": []
		},
		{
			"name": "update grocery items",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "role",
						"value": "admin",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"groceryIds\":[1],\n    \"groceryData\": {\n        \"grocery_name\": \"ornage\",\n        \"grocery_price\": 35\n    }\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/updategroceryitems",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"updategroceryitems"
					]
				}
			},
			"response": []
		},
		{
			"name": "add to cart",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"userId\": 1,\n    \"groceryId\":[1,2,3]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/addtocart",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"addtocart"
					]
				}
			},
			"response": []
		}
	]
}