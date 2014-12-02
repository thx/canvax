define("canvax/display/DisplayObjectContainer",["canvax/core/Base","canvax/display/DisplayObject","canvax/display/Point"],function(a,b){return DisplayObjectContainer=function(){var a=this;a.children=[],a.mouseChildren=[],arguments.callee.superclass.constructor.apply(this,arguments),a._eventEnabled=!0},a.creatClass(DisplayObjectContainer,b,{addChild:function(a){return a?-1!=this.getChildIndex(a)?(a.parent=this,a):(a.parent&&a.parent.removeChild(a),this.children.push(a),a.parent=this,this.heartBeat&&this.heartBeat({convertType:"children",target:a,src:this}),this._afterAddChild&&this._afterAddChild(a),a):void 0},addChildAt:function(a,b){return-1!=this.getChildIndex(a)?(a.parent=this,a):(a.parent&&a.parent.removeChild(a),this.children.splice(b,0,a),a.parent=this,this.heartBeat&&this.heartBeat({convertType:"children",target:a,src:this}),this._afterAddChild&&this._afterAddChild(a,b),a)},removeChild:function(a){return this.removeChildAt(_.indexOf(this.children,a))},removeChildAt:function(a){if(0>a||a>this.children.length-1)return!1;var b=this.children[a];return null!=b&&(b.parent=null),this.children.splice(a,1),this.heartBeat&&this.heartBeat({convertType:"children",target:b,src:this}),this._afterDelChild&&this._afterDelChild(b,a),b},removeChildById:function(a){for(var b=0,c=this.children.length;c>b;b++)if(this.children[b].id==a)return this.removeChildAt(b);return!1},removeAllChildren:function(){for(;this.children.length>0;)this.removeChildAt(0)},destroy:function(){this.parent&&this.parent.removeChild(this),_.each(this.children,function(a){a.destroy()})},getChildById:function(a,b){if(b)return null;for(var c=0,d=this.children.length;d>c;c++)if(this.children[c].id==a)return this.children[c];return null},getChildAt:function(a){return 0>a||a>this.children.length-1?null:this.children[a]},getChildIndex:function(a){return _.indexOf(this.children,a)},setChildIndex:function(a,b){if(a.parent==this){var c=_.indexOf(this.children,a);b!=c&&(this.children.splice(c,1),this.children.splice(b,0,a))}},contains:function(a){return-1!=this.getChildIndex(a)},getNumChildren:function(){return this.children.length},getObjectsUnderPoint:function(a,b){for(var c=[],d=this.children.length-1;d>=0;d--){var e=this.children[d];if(null!=e&&e._eventEnabled&&e.context.visible)if(e instanceof DisplayObjectContainer){if(e.mouseChildren&&e.getNumChildren()>0){var f=e.getObjectsUnderPoint(a);f.length>0&&(c=c.concat(f))}}else if(e.getChildInPoint(a)&&(c.push(e),void 0!=b&&!isNaN(b)&&c.length==b))return c}return c},render:function(a){for(var b=0,c=this.children.length;c>b;b++)this.children[b]._render(a)}}),DisplayObjectContainer});