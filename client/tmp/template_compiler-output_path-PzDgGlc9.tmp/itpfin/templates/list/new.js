export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.8.3",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 0
        }
      },
      "moduleName": "itpfin/templates/list/new.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      var el2 = dom.createTextNode("Add Restaurant");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nName: ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nCity: ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"class","btn btn-danger");
      dom.setAttribute(el1,"type","submit");
      var el2 = dom.createTextNode("Submit");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [8]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,6,6,contextualElement);
      morphs[3] = dom.createElementMorph(element0);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[1,0],[1,10]]],0,0,0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","name",["loc",[null,[3,20],[3,24]]],0,0,0,0]],[],[],0,0],"type","text","id","name"],["loc",[null,[3,6],[3,48]]],0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","author",["loc",[null,[4,20],[4,26]]],0,0,0,0]],[],[],0,0],"type","text","id","city"],["loc",[null,[4,6],[4,50]]],0,0],
      ["element","action",["addRestaurant"],[],["loc",[null,[5,45],[5,71]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));