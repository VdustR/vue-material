webpackJsonp([31,37],{808:function(e,t,a){var l=a(1)(a(842),a(951),null,null,null);e.exports=l.exports},842:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{fruits:["Orange","Apple","Pineapple"],contacts:["Marcos Moura"],cities:["Amsterdam","London","Tokio"]}}},e.exports=t.default},951:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-content",{attrs:{"page-title":"Components - Chips"}},[a("docs-component",[a("div",{slot:"description"},[a("p",[e._v("A chip may contain entities such as a photo, text, rules, an icon, or a contact.")])]),e._v(" "),a("div",{slot:"api"},[a("api-table",{attrs:{name:"md-chip"}},[a("md-table",{slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("disabled")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Disable the chip and prevent its actions. Default: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-deletable")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Enable delete button. Default: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-editable")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Enable click on the chip's content. Default: "),a("code",[e._v("false")])])],1)],1)],1),e._v(" "),a("md-table",{slot:"events"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Value")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("delete")]),e._v(" "),a("md-table-cell",[e._v("None")]),e._v(" "),a("md-table-cell",[e._v("Triggered when delete button is clicked.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("edit")]),e._v(" "),a("md-table-cell",[e._v("None")]),e._v(" "),a("md-table-cell",[e._v("Triggered when the chip's content is clicked.")])],1)],1)],1)],1),e._v(" "),a("api-table",{attrs:{name:"md-chips"}},[a("md-table",{slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Type")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("v-model")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Array")])]),e._v(" "),a("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("disabled")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Disable the chips and prevent its actions. Default: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-input-id")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The chips input id.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-input-name")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The chips input name.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-input-placeholder")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v("The chips input placeholder.")])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-input-type")]),e._v(" "),a("md-table-cell",[a("code",[e._v("String")])]),e._v(" "),a("md-table-cell",[e._v('The chips input type. Cannot be "file". Default: '),a("code",[e._v("text")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-static")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Boolean")])]),e._v(" "),a("md-table-cell",[e._v("Display read only chips. Default: "),a("code",[e._v("false")])])],1),e._v(" "),a("md-table-row",[a("md-table-cell",[e._v("md-max")]),e._v(" "),a("md-table-cell",[a("code",[e._v("Number")])]),e._v(" "),a("md-table-cell",[e._v("The max number of chips to be added. This property works only for new chips. If the initial value in the v-model have more chips than the max value, all the chips will be rendered. Default: "),a("code",[e._v("Infinity")])])],1)],1)],1),e._v(" "),a("md-table",{slot:"events"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Name")]),e._v(" "),a("md-table-head",[e._v("Value")]),e._v(" "),a("md-table-head",[e._v("Description")])],1)],1),e._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[e._v("change")]),e._v(" "),a("md-table-cell",[e._v("The selcted chips Array")]),e._v(" "),a("md-table-cell",[e._v("Triggered when the chips is created or deleted.")])],1)],1)],1)],1)],1),e._v(" "),a("div",{slot:"example"},[a("example-box",{attrs:{"card-title":"Single Chips"}},[a("div",{slot:"demo"},[a("md-chip",[e._v("Marcos Moura")]),e._v(" "),a("md-chip",{attrs:{"md-deletable":""}},[e._v("Luiza Ivanenko")]),e._v(" "),a("md-chip",{attrs:{"md-editable":""}},[e._v("Alban Mouton")])],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v("\n            <md-chip>Marcos Moura</md-chip>\n            <md-chip md-deletable>Luiza Ivanenko</md-chip>\n            <md-chip md-editable>Alban Mouton</md-chip>\n          ")])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Static"}},[a("div",{slot:"demo"},[a("md-chips",{attrs:{"md-static":""},model:{value:e.fruits,callback:function(t){e.fruits=t},expression:"fruits"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="fruits" md-static></md-chips>\n          ')]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                fruits: ['Orange', 'Apple', 'Pineapple']\n              })\n            };\n          ")])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Editable"}},[a("div",{slot:"demo"},[a("md-chips",{attrs:{"md-input-placeholder":"Add a contact"},model:{value:e.contacts,callback:function(t){e.contacts=t},expression:"contacts"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="contacts" md-input-placeholder="Add a contact"></md-chips>\n          ')]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                contacts: ['Marcos Moura'],\n              })\n            };\n          ")])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Errors"}},[a("div",{slot:"demo"},[a("md-chips",{staticClass:"md-input-invalid",attrs:{"md-input-placeholder":"Add a contact"},model:{value:e.contacts,callback:function(t){e.contacts=t},expression:"contacts"}},[a("span",{staticClass:"md-error"},[e._v("Validation message")])])],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="contacts" md-input-placeholder="Add a contact" class="md-input-invalid">\n              <span class="md-error">Validation message</span>\n            </md-chips>\n          ')]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                contacts: ['Marcos Moura'],\n              })\n            };\n          ")])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Custom chip and Limit"}},[a("div",{slot:"demo"},[a("md-chips",{attrs:{"md-max":5,"md-input-placeholder":"Cities..."},scopedSlots:e._u([{key:"chip",fn:function(t){return[a("span",[e._v(e._s(t.value))]),e._v(" "),"Amsterdam"===t.value?a("small",[e._v("(favorite)")]):e._e()]}}]),model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}})],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chips v-model="cities" :md-max="5" md-input-placeholder="Cities...">\n              <template scope="chip" slot="chip">\n                <span>'+e._s("{{ chip.value }}")+"</span>\n                <small v-if=\"chip.value === 'Amsterdam'\">(favorite)</small>\n              </template>\n            </md-chips>\n          ")]),e._v(" "),a("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                  cities: ['Amsterdam', 'London', 'Tokio']\n              })\n            };\n          ")])],1)]),e._v(" "),a("example-box",{attrs:{"card-title":"Themed Chips"}},[a("div",{slot:"demo"},[a("md-chip",[e._v("Default")]),e._v(" "),a("md-chip",{attrs:{"md-deletable":""}},[e._v("Default")]),e._v(" "),a("md-chip",{staticClass:"md-primary"},[e._v("Primary")]),e._v(" "),a("md-chip",{staticClass:"md-primary",attrs:{"md-deletable":""}},[e._v("Primary")]),e._v(" "),a("md-chip",{staticClass:"md-accent"},[e._v("Accent")]),e._v(" "),a("md-chip",{staticClass:"md-accent",attrs:{"md-deletable":""}},[e._v("Accent")]),e._v(" "),a("md-chip",{staticClass:"md-warn"},[e._v("Warn")]),e._v(" "),a("md-chip",{staticClass:"md-warn",attrs:{"md-deletable":""}},[e._v("Warn")])],1),e._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-chip>Default</md-chip>\n            <md-chip md-deletable>Default</md-chip>\n            <md-chip class="md-primary">Primary</md-chip>\n            <md-chip md-deletable class="md-primary">Primary</md-chip>\n            <md-chip class="md-accent">Accent</md-chip>\n            <md-chip md-deletable class="md-accent">Accent</md-chip>\n            <md-chip class="md-warn">Warn</md-chip>\n            <md-chip md-deletable class="md-warn">Warn</md-chip>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}}});