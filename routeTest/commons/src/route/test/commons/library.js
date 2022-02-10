/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library route.test.commons.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "route.test.commons",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"route.test.commons.ExampleColor"
		],
		interfaces: [],
		controls: [
			"route.test.commons.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>commons</code>
	 *
	 * @namespace
	 * @name route.test.commons
	 * @author Kefren Conceição
	 * @version ${version}
	 * @public
	 */
	var thisLib = route.test.commons;

	/**
	 * Semantic Colors of the <code>route.test.commons.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
