/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  query (req, res) {
    var order
    Order.findOne({orderNumber: req.param('orderNumber')}).populate('sender').populate('receiver').then((result) => {
      order = result
      if (order) {
        return Route.find({order: order.id}).populate('location')
      } else {
        res.send({order: null, routes: null})
      }
    }).then((routes) => {
      res.send({
        order: order,
        routes: routes
      })
    })
  },

  sign (req, res) {

  },

  test (req, res) {
    var order = {
      "order": {
        "sender": {
          "name": "袁毅哲",
          "phone": "911110",
          "address": "住在家里",
          "createdAt": "2016-06-06T05:44:44.148Z",
          "updatedAt": "2016-06-06T05:44:44.148Z",
          "id": "57550dcc88d11d2e3315c1df"
        },
        "receiver": {
          "name": "袁毅哲",
          "phone": "911110",
          "address": "住在家里",
          "createdAt": "2016-06-06T05:44:44.148Z",
          "updatedAt": "2016-06-06T05:44:44.148Z",
          "id": "57550dcc88d11d2e3315c1df"
        },
        "orderNumber": "12345672331",
        "createdAt": "2016-06-06T06:04:02.425Z",
        "updatedAt": "2016-06-06T06:04:02.425Z",
        "id": "5755125264195f1238ed8743"
      },
      "routes": [
        {
          "order": "5755125264195f1238ed8743",
          "location": {
            "name": "中南海",
            "createdAt": "2016-06-06T05:40:31.740Z",
            "updatedAt": "2016-06-06T05:40:31.740Z",
            "id": "57550ccf88d11d2e3315c1dd"
          },
          "context": "context1",
          "createdAt": "2016-06-06T06:12:45.457Z",
          "updatedAt": "2016-06-06T06:12:45.457Z",
          "id": "5755145d7e4c3641391e36ed"
        },
        {
          "order": "5755125264195f1238ed8743",
          "location": {
            "name": "White Palace",
            "createdAt": "2016-06-06T06:06:00.692Z",
            "updatedAt": "2016-06-06T06:06:00.692Z",
            "id": "575512c864195f1238ed8744"
          },
          "context": "context2",
          "createdAt": "2016-06-06T06:12:57.373Z",
          "updatedAt": "2016-06-06T06:12:57.373Z",
          "id": "575514697e4c3641391e36ee"
        },
        {
          "order": "5755125264195f1238ed8743",
          "location": {
            "name": "Effel Tower",
            "createdAt": "2016-06-06T06:06:19.027Z",
            "updatedAt": "2016-06-06T06:06:19.027Z",
            "id": "575512db64195f1238ed8745"
          },
          "context": "context3",
          "createdAt": "2016-06-06T06:13:03.522Z",
          "updatedAt": "2016-06-06T06:13:03.522Z",
          "id": "5755146f7e4c3641391e36ef"
        }
      ]
    }
    res.view('test', {'order': order})
  }

};

