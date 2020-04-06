(function(){

if (!window.qx)
  window.qx = {};

qx.$$start = new Date();

if (!qx.$$appRoot) {
  var strBase = null;
  var pos;
  var bootScriptElement = document.currentScript; // Everything except IE11 https://caniuse.com/#feat=document-currentscript
  if (!bootScriptElement) {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && scripts[i].src.match(/boot\.js/)) {
        bootScriptElement = scripts[i];
        break;
      }
    }
  }

  if (bootScriptElement) {
    strBase = bootScriptElement.src;
    pos = strBase.indexOf('?');
    if (pos > -1)
      strBase = strBase.substring(0, pos);
    pos = strBase.lastIndexOf('/');
    if (pos > -1) {
      strBase = strBase.substring(0, pos + 1);
    } else {
      strBase = "";
    }
  }
  if (!strBase) {
    strBase = document.location.href;
    pos = strBase.lastIndexOf('/');
    if (pos > -1) {
      strBase = strBase.substring(0, pos + 1);
    } else if (strBase[strBase.length - 1] != '/') {
      strBase += "/";
    }
    if (qx.$$appRoot) {
      strBase += qx.$$appRoot;
      if (strBase[strBase.length - 1] != '/') {
        strBase += "/";
      }
    }
  }
  qx.$$appRoot = strBase;
} else {
  if (qx.$$appRoot[qx.$$appRoot.length - 1] != "/")
    qx.$$appRoot += "/";
}
qx.$$resourceRoot = qx.$$appRoot;

if (!qx.$$environment)
  qx.$$environment = {};

var envinfo = {
  "qx.application": "qxl.demobrowser.demo.data.NamesList",
  "qx.revision": "",
  "qx.theme": null,
  "qx.version": "6.0.0-beta-20200401-1413",
  "qx.libraryInfoMap": {
    "qxl.demobrowser": {
      "name": "DemoBrowser",
      "summary": "A GUI framework application for qooxdoo demos",
      "description": "The DemoBrowser provides a run environment for qooxdoo samples and demo apps that features tree and forward/backward navigation, profiling and code inspection.",
      "keywords": [
        "demos",
        "run frame"
      ],
      "homepage": "http://demo.qooxdoo.org/current/demobrowser",
      "license": "MIT",
      "authors": [
        {
          "name": "Thomas Herchenroeder (thron7)",
          "email": "thron7 AT users DOT sourceforge DOT net"
        },
        {
          "name": "Daniel Wagner (d_wagner)",
          "email": "daniel DOT wagner AT 1und1 DOT de"
        },
        {
          "name": "Martin Wittemann (martinwittemann)",
          "email": "martin DOT wittemann AT 1und1 DOT de"
        },
        {
          "name": "Henner Kollmann (hkollmann)",
          "email": "Henner DOT Kollmann AT gmx DOT de"
        }
      ],
      "version": "1.0.0"
    },
    "qx": {
      "name": "qooxdoo framework",
      "summary": "The qooxdoo framework library",
      "description": "This library contains the qooxdoo Javascript framework classes for website, mobile, desktop and server.",
      "keywords": [
        "qooxdoo",
        "framework",
        "widget",
        "cross-browser",
        "ajax"
      ],
      "homepage": "http://qooxdoo.org",
      "license": "MIT",
      "authors": [
        {
          "name": "Alexander Steitz (asteitz)",
          "email": "alexander DOT steitz AT 1und1 DOT de"
        },
        {
          "name": "Christopher Zündorf (czuendorf)",
          "email": "christopher DOT zuendorf AT 1und1 DOT de"
        },
        {
          "name": "Daniel Wagner (danielwagner)",
          "email": "daniel DOT wagner AT 1und1 DOT de"
        },
        {
          "name": "Derrell Lipman (derrell)",
          "email": "derrell DOT lipman AT unwireduniverse DOT com"
        },
        {
          "name": "Andreas Ecker (ecker)",
          "email": "andreas DOT ecker AT 1und1 DOT de"
        },
        {
          "name": "Christian Hagendorn (Hagendorn)",
          "email": "christian DOT hagendorn AT 1und1 DOT de"
        },
        {
          "name": "Mustafa Sak (msak)",
          "email": "Mustafa DOT Sak AT 1und1 DOT de"
        },
        {
          "name": "Thomas Herchenröder (thron7)",
          "email": "thron7 AT users DOT sourceforge DOT net"
        },
        {
          "name": "Tino Butz (tjbutz)",
          "email": "tino DOT butz AT 1und1 DOT de"
        },
        {
          "name": "Tristan Koch (trkoch)",
          "email": "tristan DOT koch AT 1und1 DOT de"
        },
        {
          "name": "Martin Wittemann (wittemann)",
          "email": "martin DOT wittemann AT 1und1 DOT de"
        },
        {
          "name": "John Spackman (johnspackman)",
          "email": "john.spackman@zenesis.com"
        },
        {
          "name": "Christian Boulanger (cboulanger)",
          "email": "info@bibliograph.org"
        },
        {
          "name": "Henner Kollmann (hkollmann)",
          "email": "Henner.Kollmann.gmx.de"
        },
        {
          "name": "Tobias Oetiker (oetiker)",
          "email": "tobi@oetiker.ch"
        },
        {
          "name": "Dietrich Streifert (level420)",
          "email": "dietrich.streifert@visionet.de"
        }
      ],
      "version": "6.0.0-beta-20200401-1413"
    }
  },
  "qx.allowUrlVariants": true,
  "qx.allowUrlSettings": true,
  "qx.contrib": false,
  "qx.icontheme": [
    "Tango",
    "Oxygen"
  ]
};
for (var k in envinfo)
  qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries)
  qx.$$libraries = {};
var libinfo = {
  "__out__": {
    "sourceUri": qx.$$appRoot + ""
  },
  "qx": {
    "sourceUri": qx.$$appRoot + "../../transpiled/",
    "resourceUri": qx.$$appRoot + "../../resource"
  },
  "qxl.demobrowser": {
    "sourceUri": qx.$$appRoot + "../../transpiled/",
    "resourceUri": qx.$$appRoot + "../../resource"
  }
};
for (var k in libinfo)
  qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {
  "C": null,
  "en": null
};
qx.$$locales = {
  "C": null,
  "en": null
};
qx.$$packageData = {};
qx.$$g = {};
qx.$$createdAt = function(obj, filename, lineNumber, column) {
  if (obj !== undefined && obj !== null && typeof Object.$$createdAt === undefined) {
    Object.defineProperty(obj, "$$createdAt", {
      value: {
        filename: filename,
        lineNumber: lineNumber,
        column: column
      },
      enumerable: false,
      configurable: false,
      writable: false
    });
  }
  return obj;
};

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

qx.$$loader = {
  parts : {
  "boot": [
    "0"
  ]
},
  packages : {
  "0": {
    "uris": [
      "__out__:qxl.demobrowser.demo.data.NamesList-resources.js",
      "__out__:qxl.demobrowser.demo.data.NamesList-polyfill.js",
      "qx:qx/Bootstrap.js",
      "qx:qx/core/ObjectRegistry.js",
      "qx:qx/core/Environment.js",
      "qx:qx/lang/normalize/Array.js",
      "qx:qx/bom/client/EcmaScript.js",
      "qx:qx/Interface.js",
      "qx:qx/Mixin.js",
      "qx:qx/lang/normalize/Date.js",
      "qx:qx/lang/normalize/Error.js",
      "qx:qx/lang/normalize/Function.js",
      "qx:qx/lang/normalize/String.js",
      "qx:qx/lang/normalize/Object.js",
      "qx:qx/lang/normalize/Number.js",
      "qx:qx/core/Property.js",
      "qx:qx/util/OOUtil.js",
      "qx:qx/Class.js",
      "qx:qx/data/MBinding.js",
      "qx:qx/dev/StackTrace.js",
      "qx:qx/util/RingBuffer.js",
      "qx:qx/log/appender/RingBuffer.js",
      "qx:qx/log/Logger.js",
      "qx:qx/core/MLogging.js",
      "qx:qx/bom/Event.js",
      "qx:qx/core/IDisposable.js",
      "qx:qx/event/Manager.js",
      "qx:qx/dom/Node.js",
      "qx:qx/lang/Array.js",
      "qx:qx/lang/Function.js",
      "qx:qx/event/Registration.js",
      "qx:qx/core/MEvent.js",
      "qx:qx/core/MProperty.js",
      "qx:qx/core/MObjectId.js",
      "qx:qx/lang/Type.js",
      "qx:qx/core/Assert.js",
      "qx:qx/core/MAssert.js",
      "qx:qx/core/Object.js",
      "qx:qx/data/IListData.js",
      "qx:qx/event/type/Event.js",
      "qx:qx/event/type/Data.js",
      "qx:qx/event/IEventDispatcher.js",
      "qx:qx/event/dispatch/Direct.js",
      "qx:qx/Promise.js",
      "qx:qx/lang/String.js",
      "qx:qx/data/SingleValueBinding.js",
      "qx:qx/event/IEventHandler.js",
      "qx:qx/event/handler/Object.js",
      "qx:qx/bom/client/Engine.js",
      "qx:qx/bom/client/Browser.js",
      "qx:qx/bom/client/CssTransition.js",
      "qx:qx/bom/Style.js",
      "qx:qx/event/GlobalError.js",
      "qx:qx/util/DeferredCallManager.js",
      "qx:qx/util/DeferredCall.js",
      "qx:qx/util/ObjectPool.js",
      "qx:qx/event/Pool.js",
      "qx:qx/event/Utils.js",
      "qx:qx/util/DisposeUtil.js",
      "qx:qx/data/marshal/MEventBubbling.js",
      "qx:qx/data/Array.js",
      "qx:qx/type/BaseError.js",
      "qx:qx/core/AssertionError.js",
      "qx:qx/lang/Json.js",
      "qx:qx/lang/Number.js",
      "qx:qx/util/Uuid.js",
      "qx:qx/core/ValidationError.js",
      "qx:qx/bom/client/OperatingSystem.js",
      "qx:qx/core/WindowError.js",
      "qx:qx/core/GlobalError.js",
      "qx:qx/lang/Object.js",
      "qx:qx/bom/client/Runtime.js",
      "qx:qx/event/type/Native.js",
      "qx:qx/event/handler/Window.js",
      "qx:qx/event/handler/UserAction.js",
      "qx:qx/event/handler/Keyboard.js",
      "qx:qx/event/dispatch/AbstractBubbling.js",
      "qx:qx/event/dispatch/DomBubbling.js",
      "qx:qx/event/type/Dom.js",
      "qx:qx/event/type/Mouse.js",
      "qx:qx/event/type/Pointer.js",
      "qx:qx/event/type/dom/Custom.js",
      "qx:qx/event/type/dom/Pointer.js",
      "qx:qx/bom/client/Event.js",
      "qx:qx/bom/client/Device.js",
      "qx:qx/event/handler/PointerCore.js",
      "qx:qx/event/handler/Pointer.js",
      "qx:qx/event/handler/GestureCore.js",
      "qx:qx/event/type/Tap.js",
      "qx:qx/event/type/Swipe.js",
      "qx:qx/event/type/Rotate.js",
      "qx:qx/event/type/Pinch.js",
      "qx:qx/event/type/Track.js",
      "qx:qx/event/type/Roll.js",
      "qx:qx/event/handler/Gesture.js",
      "qx:qx/log/appender/Console.js",
      "qx:qx/event/type/KeyInput.js",
      "qx:qx/event/type/KeySequence.js",
      "qx:qx/event/util/Keyboard.js",
      "qx:qx/event/handler/Focus.js",
      "qx:qx/bom/Viewport.js",
      "qx:qx/event/Emitter.js",
      "qx:qx/bom/AnimationFrame.js",
      "qx:qx/util/Wheel.js",
      "qx:qx/event/Timer.js",
      "qx:qx/bom/client/Stylesheet.js",
      "qx:qx/bom/Stylesheet.js",
      "qx:qx/log/appender/Formatter.js",
      "qx:qx/dom/Hierarchy.js",
      "qx:qx/event/handler/Application.js",
      "qx:qx/core/BaseInit.js",
      "qx:qx/core/Init.js",
      "qx:qx/bom/client/Html.js",
      "qx:qx/bom/Selection.js",
      "qx:qx/event/type/Focus.js",
      "qx:qx/ui/core/LayoutItem.js",
      "qx:qx/locale/MTranslation.js",
      "qx:qx/theme/manager/Meta.js",
      "qx:qx/ui/core/Widget.js",
      "qx:qx/bom/element/Attribute.js",
      "qx:qx/bom/Document.js",
      "qx:qx/bom/client/CssAnimation.js",
      "qx:qx/dom/Element.js",
      "qx:qx/util/Uri.js",
      "qx:qx/util/format/IFormat.js",
      "qx:qx/util/format/DateFormat.js",
      "qx:qx/bom/Range.js",
      "qx:qx/util/StringSplit.js",
      "qx:qx/ui/core/EventHandler.js",
      "qx:qx/event/handler/Capture.js",
      "qx:qx/event/handler/DragDrop.js",
      "qx:qx/util/PropertyUtil.js",
      "qx:qx/ui/core/queue/Layout.js",
      "qx:qx/ui/core/queue/Visibility.js",
      "qx:qx/ui/layout/Abstract.js",
      "qx:qx/theme/manager/Decoration.js",
      "qx:qx/ui/core/queue/Manager.js",
      "qx:qx/module/Css.js",
      "qx:qx/type/BaseArray.js",
      "qx:qxWeb.js",
      "qx:qx/bom/Selector.js",
      "qx:qx/module/Polyfill.js",
      "qx:qx/module/Environment.js",
      "qx:qx/module/Event.js",
      "qx:qx/module/event/PointerHandler.js",
      "qx:qx/module/Animation.js",
      "qx:qx/html/Element.js",
      "qx:qx/event/dispatch/MouseCapture.js",
      "qx:qx/type/BaseString.js",
      "qx:qx/locale/LocalizedString.js",
      "qx:qx/bom/client/Locale.js",
      "qx:qx/locale/Manager.js",
      "qx:qx/util/ValueManager.js",
      "qx:qx/theme/manager/Color.js",
      "qx:qx/ui/core/queue/Appearance.js",
      "qx:qx/theme/manager/Appearance.js",
      "qx:qx/ui/basic/Image.js",
      "qx:qx/ui/core/MPlacement.js",
      "qx:qx/ui/core/DragDropCursor.js",
      "qx:qx/bom/element/Location.js",
      "qx:qx/ui/core/queue/Dispose.js",
      "qx:qx/ui/core/queue/Widget.js",
      "qx:qx/theme/manager/Font.js",
      "qx:qx/theme/manager/Icon.js",
      "qx:qx/Theme.js",
      "qx:qx/locale/Date.js",
      "qx:qx/event/type/Drag.js",
      "qx:qx/bom/client/Css.js",
      "qx:qx/bom/element/Clip.js",
      "qx:qx/bom/element/Cursor.js",
      "qx:qx/bom/element/Opacity.js",
      "qx:qx/bom/element/BoxSizing.js",
      "qx:qx/bom/element/Style.js",
      "qx:qx/ui/style/Stylesheet.js",
      "qx:qx/ui/decoration/IDecorator.js",
      "qx:qx/ui/decoration/Abstract.js",
      "qx:qx/ui/decoration/MBackgroundColor.js",
      "qx:qx/ui/decoration/MBorderRadius.js",
      "qx:qx/ui/decoration/MBoxShadow.js",
      "qx:qx/ui/decoration/MSingleBorder.js",
      "qx:qx/ui/decoration/MBackgroundImage.js",
      "qx:qx/ui/decoration/MDoubleBorder.js",
      "qx:qx/ui/decoration/MLinearBackgroundGradient.js",
      "qx:qx/ui/decoration/MBorderImage.js",
      "qx:qx/ui/decoration/MTransition.js",
      "qx:qx/ui/decoration/Decorator.js",
      "qx:qx/util/AliasManager.js",
      "qx:qx/bom/element/Dimension.js",
      "qx:qx/bom/element/Class.js",
      "qx:qx/bom/element/Animation.js",
      "qx:qx/event/handler/Mouse.js",
      "qx:qx/event/handler/Element.js",
      "qx:qx/event/handler/Appear.js",
      "qx:qx/event/handler/Orientation.js",
      "qx:qx/event/handler/TouchCore.js",
      "qx:qx/event/handler/Touch.js",
      "qx:qx/event/handler/Offline.js",
      "qx:qx/event/handler/Input.js",
      "qx:qx/bom/Element.js",
      "qx:qx/bom/element/Scroll.js",
      "qx:qx/core/Id.js",
      "qx:qx/util/ColorUtil.js",
      "qx:qx/io/ImageLoader.js",
      "qx:qx/html/Image.js",
      "qx:qx/html/Label.js",
      "qx:qx/bom/client/Transport.js",
      "qx:qx/util/ResourceManager.js",
      "qx:qx/util/LibraryManager.js",
      "qx:qx/bom/element/Decoration.js",
      "qx:qx/event/Idle.js",
      "qx:qx/util/placement/Placement.js",
      "qx:qx/bom/Font.js",
      "qx:qx/bom/webfonts/WebFont.js",
      "qx:qx/bom/element/AnimationCss.js",
      "qx:qx/bom/element/AnimationJs.js",
      "qx:qx/event/type/MouseWheel.js",
      "qx:qx/event/type/Orientation.js",
      "qx:qx/event/type/Touch.js",
      "qx:qx/bom/client/Plugin.js",
      "qx:qx/xml/Document.js",
      "qx:qx/bom/Label.js",
      "qx:qx/bom/element/Background.js",
      "qx:qx/util/placement/AbstractAxis.js",
      "qx:qx/util/placement/DirectAxis.js",
      "qx:qx/util/placement/KeepAlignAxis.js",
      "qx:qx/util/placement/BestFitAxis.js",
      "qx:qx/bom/webfonts/Manager.js",
      "qx:qx/bom/element/AnimationHandle.js",
      "qx:qx/bom/client/CssTransform.js",
      "qx:qx/bom/element/Transform.js",
      "qx:qx/bom/client/Xml.js",
      "qx:qx/bom/webfonts/Validator.js",
      "qx:qx/log/appender/Native.js",
      "qx:qx/theme/classic/Color.js",
      "qx:qx/theme/classic/Decoration.js",
      "qx:qx/theme/classic/Font.js",
      "qx:qx/theme/classic/Appearance.js",
      "qx:qx/theme/icon/Oxygen.js",
      "qx:qx/theme/Classic.js",
      "qx:qx/theme/indigo/Color.js",
      "qx:qx/theme/simple/Decoration.js",
      "qx:qx/theme/indigo/Decoration.js",
      "qx:qx/theme/indigo/Font.js",
      "qx:qx/theme/simple/Appearance.js",
      "qx:qx/theme/indigo/Appearance.js",
      "qx:qx/theme/icon/Tango.js",
      "qx:qx/theme/Indigo.js",
      "qx:qx/theme/simple/Image.js",
      "qx:qx/theme/modern/Color.js",
      "qx:qx/theme/modern/Decoration.js",
      "qx:qx/theme/modern/Font.js",
      "qx:qx/theme/modern/Appearance.js",
      "qx:qx/theme/Modern.js",
      "qx:qx/theme/simple/Color.js",
      "qx:qx/theme/simple/Font.js",
      "qx:qx/theme/Simple.js",
      "qx:qx/application/IApplication.js",
      "qx:qx/application/AbstractGui.js",
      "qx:qx/application/Standalone.js",
      "qxl.demobrowser:qxl/demobrowser/demo/data/NamesList.js",
      "qx:qx/ui/tooltip/Manager.js",
      "qx:qx/ui/core/MChildrenHandling.js",
      "qx:qx/ui/core/MBlocker.js",
      "qx:qx/ui/window/MDesktop.js",
      "qx:qx/ui/root/Abstract.js",
      "qx:qx/ui/core/FocusHandler.js",
      "qx:qx/ui/root/Application.js",
      "qx:qx/ui/core/scroll/MScrollBarFactory.js",
      "qx:qx/ui/core/scroll/MRoll.js",
      "qx:qx/ui/core/MDragDropScrolling.js",
      "qx:qx/ui/core/DragDropScrolling.js",
      "qx:qx/ui/core/scroll/AbstractScrollArea.js",
      "qx:qx/ui/core/ISingleSelection.js",
      "qx:qx/ui/core/IMultiSelection.js",
      "qx:qx/ui/form/IForm.js",
      "qx:qx/ui/form/IField.js",
      "qx:qx/ui/form/IModelSelection.js",
      "qx:qx/ui/core/MRemoteChildrenHandling.js",
      "qx:qx/ui/core/MMultiSelectionHandling.js",
      "qx:qx/ui/form/MForm.js",
      "qx:qx/ui/form/MModelSelection.js",
      "qx:qx/ui/core/selection/Abstract.js",
      "qx:qx/ui/core/selection/Widget.js",
      "qx:qx/ui/core/selection/ScrollArea.js",
      "qx:qx/bom/client/Scroll.js",
      "qx:qx/ui/layout/Canvas.js",
      "qx:qx/ui/layout/Grid.js",
      "qx:qx/ui/form/List.js",
      "qx:qx/data/controller/MSelection.js",
      "qx:qx/data/controller/ISelection.js",
      "qx:qx/data/controller/List.js",
      "qx:qx/data/store/Json.js",
      "qx:qx/ui/form/IStringForm.js",
      "qx:qx/ui/basic/Label.js",
      "qx:qx/ui/core/MLayoutHandling.js",
      "qx:qx/ui/container/Composite.js",
      "qx:qx/ui/popup/Popup.js",
      "qx:qx/ui/tooltip/ToolTip.js",
      "qx:qx/ui/core/Blocker.js",
      "qx:qx/html/Root.js",
      "qx:qx/ui/core/scroll/IScrollBar.js",
      "qx:qx/ui/core/scroll/ScrollBar.js",
      "qx:qx/ui/core/scroll/ScrollPane.js",
      "qx:qx/ui/layout/HBox.js",
      "qx:qx/ui/layout/VBox.js",
      "qx:qx/ui/layout/Util.js",
      "qx:qx/ui/basic/Atom.js",
      "qx:qx/ui/form/IModel.js",
      "qx:qx/ui/form/MModelProperty.js",
      "qx:qx/ui/layout/Atom.js",
      "qx:qx/ui/form/ListItem.js",
      "qx:qx/data/marshal/IMarshaler.js",
      "qx:qx/data/marshal/Json.js",
      "qx:qx/io/request/AbstractRequest.js",
      "qx:qx/io/request/Xhr.js",
      "qx:qx/ui/popup/Manager.js",
      "qx:qx/html/Blocker.js",
      "qx:qx/ui/form/INumberForm.js",
      "qx:qx/ui/form/IRange.js",
      "qx:qx/ui/form/Slider.js",
      "qx:qx/ui/core/scroll/ScrollSlider.js",
      "qx:qx/ui/core/MExecutable.js",
      "qx:qx/ui/form/IExecutable.js",
      "qx:qx/ui/form/Button.js",
      "qx:qx/ui/form/RepeatButton.js",
      "qx:qx/ui/layout/Grow.js",
      "qx:qx/util/Request.js",
      "qx:qx/util/Serializer.js",
      "qx:qx/bom/request/Xhr.js",
      "qx:qx/util/ResponseParser.js",
      "qx:qx/event/AcceleratingTimer.js"
    ]
  }
},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,
  isLoadParallel: !isFirefox && !isIE11 && 'async' in document.createElement('script'),
  delayDefer: true,
  splashscreen: window.QOOXDOO_SPLASH_SCREEN || null,
  isLoadChunked: false,
  loadChunkSize: null,

  decodeUris : function(compressedUris, pathName) {
    if (!pathName)
      pathName = "sourceUri";
    var libs = qx.$$libraries;
    var uris = [];
    for (var i = 0; i < compressedUris.length; i++) {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length == 2 && uri[0] in libs) {
        var prefix = libs[uri[0]][pathName];
        if (prefix.length && prefix[prefix.length - 1] != '/')
          prefix += "/";
        euri = prefix + uri[1];
      } else if (uri.length > 2) {
        uri.shift();
        euri = uri.join(":");
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  },

  deferredEvents: null,

  /*
   * Adds event handlers
   */
  on: function(eventType, handler) {
    if (qx.$$loader.applicationHandlerReady) {
      if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
        let Application = qx.event.handler.Application.$$instance;
        if (eventType == "ready" && Application.isApplicationReady()) {
          handler(null);
          return;
        } else if (eventType == "appinitialized" && Application.isApplicationInitialized()) {
          handler(null);
          return;
        }
      }
      qx.event.Registration.addListener(window, eventType, handler);
      return;
    }
    
    if (this.deferredEvents === null)
      this.deferredEvents = {};
    var handlers = this.deferredEvents[eventType];
    if (handlers === undefined)
      handlers = this.deferredEvents[eventType] = [];
    handlers.push({ eventType: eventType, handler: handler });
  },
  
  /*
   * Startup handler, hooks into Qooxdoo proper
   */
  signalStartup: function () {
    qx.Bootstrap.executePendingDefers();
    qx.$$loader.delayDefer = false;
    qx.$$loader.scriptLoaded = true;
    function done() {
      if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
        if (qx.$$loader.deferredEvents) {
          Object.keys(qx.$$loader.deferredEvents).forEach(function(eventType) {
            var handlers = qx.$$loader.deferredEvents[eventType];
            handlers.forEach(function(handler) {
              qx.event.Registration.addListener(window, eventType, handler.handler);
            });
          });
        }
        
        qx.event.handler.Application.onScriptLoaded();
        qx.$$loader.applicationHandlerReady = true;
      } else {
        if (qx.$$loader.deferredEvents) {
          Object.keys(qx.$$loader.deferredEvents).forEach(function(eventType) {
            if (eventType === "ready") {
              qx.$$loader.deferredEvents[eventType].forEach(function(handler) {
                handler.handler(null);
              });
            }
          });
        }
        qx.$$loader.applicationHandlerReady = true;
      }
    }
    if (qx.$$loader.splashscreen)
      qx.$$loader.splashscreen.loadComplete(done);
    else
      done();
  },

  /*
   * Starts the whole loading process
   */
  init: function(){
    var l = qx.$$loader;
    l.decodeUris(l.cssBefore, "resourceUri").forEach(function(uri) {
      loadCss(uri);
    });
    allScripts = l.decodeUris(l.urisBefore, "resourceUri");
    if (!l.bootIsInline) {
      var add = l.decodeUris(l.packages[l.parts[l.boot][0]].uris);
      Array.prototype.push.apply(allScripts, add);
    }

    function begin() {
      flushScriptQueue(function(){
        // Opera needs this extra time to parse the scripts
        window.setTimeout(function(){
          var bootPackageHash = l.parts[l.boot][0];
          l.importPackageData(qx.$$packageData[bootPackageHash] || {});
          l.signalStartup();
        }, 0);
      });
    }

    if (qx.$$loader.splashscreen)
      qx.$$loader.splashscreen.loadBegin(begin);
    else
      begin();
  }
};

/*
 * Collect URL parameters
 */
var URL_PARAMETERS = {}
if (document.location.search) {
  var args = document.location.search.substring(1).split('&');
  args.forEach(function(arg) {
    var match = arg.match(/^qooxdoo\:([^=]+)(=(.*))?/);
    if (match) {
      var key = match[1];
      var value = match[3];
      if (value === undefined || value === "true" || value === "1")
        value = true;
      else if (value === "false" || value === "0")
        value = false;
      URL_PARAMETERS[key] = value;
    }
  });
}

/*
 * Get settings from Splash Screen
 */
if (URL_PARAMETERS["splashscreen-disable"] === true)
  qx.$$loader.splashscreen = null;
if (qx.$$loader.splashscreen) {
  // If there's a Splash Screen, default to chunked
  qx.$$loader.isLoadChunked = true;
  var settings = qx.$$loader.splashscreen.getSettings()||{};
  if (typeof settings.isLoadChunked == "boolean")
    qx.$$loader.isLoadChunked = settings.isLoadChunked;
  if (typeof settings.loadChunkSize == "number" && settings.loadChunkSize > 1)
    qx.$$loader.loadChunkSize = settings.loadChunkSize;
}

/*
 * Override with URL parameters
 */
for (var key in URL_PARAMETERS) {
  var value = URL_PARAMETERS[key];
  switch(key) {
  case "add-no-cache":
    qx.$$loader.addNoCacheParam = value === true;
    break;

  case "load-parallel":
    qx.$$loader.isLoadParallel = value === true;
    break;

  case "load-chunked":
    qx.$$loader.isLoadChunked = value === true;
    break;
  }
}

/*
 * IE
 */
var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

/*
 * Load Javascript
 */
function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };
  elem.onerror = function() {
    if (console && typeof console.error == "function")
      console.error("Cannot load script " + uri);
    callback && callback("Cannot load script " + uri);
  }

  if (qx.$$loader.isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

/*
 * Load CSS
 */
function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

/*
 * Used during initialisation and by `qx.io.part.Package` to load data for parts
 */
qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]) {
    var resMap = dataMap["resources"];
    for (var k in resMap)
      qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]) {
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap) {
      if (!qxlocs[lang])
        qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]) {
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap) {
      if (!qxtrans[lang])
        qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang])
          qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

/*
 * Script queue
 */
var allScripts = [];
var nextScriptIndex = 0;

var flushScriptQueue =
  qx.$$loader.isLoadParallel && qx.$$loader.isLoadChunked ?
    function(callback) {
      if (nextScriptIndex >= allScripts.length)
        return callback();
      var options = {
          numScripts: allScripts.length,
          numScriptsLoaded: 0,
          numScriptsLoading: 0
      };
      var chunkSize = qx.$$loader.loadChunkSize;
      if (chunkSize === null)
        chunkSize = Math.round(options.numScripts / 20);
      if (chunkSize < 1)
        chunkSize = 1;
      function checkForEnd() {
        if (options.numScriptsLoaded == options.numScripts)
          callback && callback();
        else if (options.numScriptsLoading == 0)
          loadNextChunk();
      }
      function onLoad() {
        options.numScriptsLoaded++;
        options.numScriptsLoading--;
        if (qx.$$loader.splashscreen)
          qx.$$loader.splashscreen.scriptLoaded(options, checkForEnd);
        else
          checkForEnd();
      }
      function loadNextChunk() {
        //console.log("Loading next chunk; chunkSize=" + chunkSize + ", numScripts=" + options.numScripts + ", numScriptsLoaded=" + options.numScriptsLoaded + ", numScriptsLoading=" + options.numScriptsLoading)
        while (nextScriptIndex < allScripts.length && options.numScriptsLoading < chunkSize) {
          var uri = allScripts[nextScriptIndex++];
          options.numScriptsLoading++;
          loadScript(uri, onLoad);
        }
      }
      loadNextChunk();
    }

  : qx.$$loader.isLoadParallel ?
    function(callback) {
      if (nextScriptIndex >= allScripts.length)
        return callback();
      var options = {
          numScripts: allScripts.length,
          numScriptsLoaded: 0,
          numScriptsLoading: 0
      };
      function checkForEnd() {
        if (options.numScriptsLoaded == options.numScripts)
          callback && callback();
      }
      function onLoad() {
        options.numScriptsLoaded++;
        options.numScriptsLoading--;
        if (qx.$$loader.splashscreen)
          qx.$$loader.splashscreen.scriptLoaded(options, checkForEnd);
        else
          checkForEnd();
      }
      while (nextScriptIndex < allScripts.length) {
        var uri = allScripts[nextScriptIndex++];
        options.numScriptsLoading++;
        loadScript(uri, onLoad);
      }
    }

  :
    function(callback) {
      var options = {
          numScripts: allScripts.length,
          numScriptsLoaded: 0,
          numScriptsLoading: 1
      };
      function queueLoadNext() {
        if (isWebkit) {
          // force async, else Safari fails with a "maximum recursion depth exceeded"
          window.setTimeout(loadNext, 0);
        } else {
          loadNext();
        }
      }
      function loadNext() {
        if (nextScriptIndex >= allScripts.length)
          return callback();
        var uri = allScripts[nextScriptIndex++];
        //console.log("Loading next chunk; chunkSize=" + chunkSize + ", numScripts=" + options.numScripts + ", numScriptsLoaded=" + options.numScriptsLoaded + ", numScriptsLoading=" + options.numScriptsLoading)
        loadScript(uri, function() {
          options.numScriptsLoaded++;
          if (qx.$$loader.splashscreen)
            qx.$$loader.splashscreen.scriptLoaded(options, queueLoadNext);
          else
            queueLoadNext();
        });
      }
      loadNext();
    };

/*
 * DOM loading
 */
var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

})();




qx.$$loader.init();
