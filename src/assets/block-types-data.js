const blockDefinitionsByCategory = new Map();
export default blockDefinitionsByCategory;

function defineBlock( definition ) {
	let category = blockDefinitionsByCategory.get( definition.category );

	if( category === undefined ) {
		category = new Map();
		blockDefinitionsByCategory.set( definition.category, category );
	}

	category.set( definition.name, definition );
}

defineBlock( {
	name: "Angle",
	label: "Angle",
	category: "Data",
	inputs: [
		{ name: "X", type: "Number" },
		{ name: "Y", type: "Number" },
		{ name: "Z", type: "Number" },
		{ name: "Units", type: "Text", valid: [ { name: "Radians", value: "radian" }, { name: "Degrees", value: "degree" } ] } ],
	outputs: [
		{ name: "Rotation", type: "Angle" } ]
} );
defineBlock( {
	name: "Arithmetic",
	label: "Arithmetic",
	category: "Operation",
	inputs: [
		{ name: "Left", type: "Number" },
		{ name: "Right", type: "Number" },
		{ name: "Operator", type: "Text", valid: [ { name: "Add", value: "+" }, { name: "Subtract", value: "-" }, { name: "Multiply", value: "*" }, { name: "Divide", value: "/" }, { name: "Modulo", value: "%" }, { name: "Power", value: "^" } ] } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "ConvertRange",
	label: "Convert range",
	category: "Operation",
	inputs: [
		{ name: "Value", type: "Number" },
		{ name: "Source start", type: "Number" },
		{ name: "Source end", type: "Number" },
		{ name: "Target start", type: "Number" },
		{ name: "Target end", type: "Number" } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "BinarySwitch",
	label: "Binary switch",
	category: "Operation",
	inputs: [
		{ name: "Binary switch", type: "Number" },
		{ name: "Else", type: "Number" },
		{ name: "Then", type: "Number" } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "ColorHex",
	label: "Color (hex)",
	category: "Data",
	inputs: [
		{ name: "RGB", type: "Hex" },
		{ name: "Opacity", type: "Number" } ],
	outputs: [
		{ name: "Color", type: "Color" } ]
} );
defineBlock( {
	name: "ColorRGB",
	label: "Color (RGB)",
	category: "Data",
	inputs: [
		{ name: "Red", type: "Number" },
		{ name: "Green", type: "Number" },
		{ name: "Blue", type: "Number" },
		{ name: "Opacity", type: "Number" } ],
	outputs: [
		{ name: "Color", type: "Color" } ]
} );
defineBlock( {
	name: "ColorHSL",
	label: "Color (HSL)",
	category: "Data",
	inputs: [
		{ name: "Hue", type: "Number" },
		{ name: "Saturation", type: "Number" },
		{ name: "Lightness", type: "Number" },
		{ name: "Opacity", type: "Number" } ],
	outputs: [
		{ name: "Color", type: "Color" } ]
} );
defineBlock( {
	name: "Ellipse",
	label: "Ellipse",
	category: "Drawable",
	inputs: [
		{ name: "Enabled", type: "Boolean" },
		{ name: "Position", type: "Point" },
		{ name: "X radius", type: "Number" },
		{ name: "Y radius", type: "Number" },
		{ name: "Color", type: "Color" },
		{ name: "Rotation", type: "Angle" },
		{ name: "Texture", type: "Texture" } ],
	outputs: []
} );
defineBlock( {
	name: "Line",
	label: "Line",
	category: "Drawable",
	inputs: [
		{ name: "Enabled", type: "Boolean" },
		{ name: "Start position", type: "Point" },
		{ name: "End position", type: "Point" },
		{ name: "Thickness", type: "Number" },
		{ name: "Color", type: "Color" } ]
} );
defineBlock( {
	name: "LogicalOperator",
	label: "Logical operator",
	category: "Operation",
	inputs: [
		{ name: "Left", type: "Number" },
		{ name: "Right", type: "Number" },
		{ name: "Operator", type: "Text", valid: [ { name: "AND", value: "AND" }, { name: "OR", value: "OR" }, { name: "XOR", value: "XOR" }, { name: "NAND", value: "NAND" }, { name: "NOR", value: "NOR" }, { name: "NXOR", value: "NXOR" } ] } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "Number",
	label: "Number",
	category: "Data",
	inputs: [
		{ name: "Value", type: "Number" } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "NumericComparison",
	label: "Numeric comparison",
	category: "Operation",
	inputs: [
		{ name: "Left", type: "Number" },
		{ name: "Right", type: "Number" },
		{ name: "Operator", type: "Text", valid: [ { name: "==", value: "==" }, { name: "!=", value: "!=" }, { name: ">", value: ">" }, { name: "<", value: "<" }, { name: ">=", value: ">=" }, { name: "<=", value: "<=" } ] } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "RoundNumber",
	label: "Round number",
	category: "Operation",
	inputs: [
		{ name: "Value", type: "Number" },
		{ name: "Precision", type: "Number" } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "Random",
	label: "Random number",
	category: "Operation",
	inputs: [
		{ name: "Minimum", type: "Number" },
		{ name: "Maximum", type: "Number" },
		{ name: "Sample", type: "Boolean" } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );
defineBlock( {
	name: "Rectangle",
	label: "Rectangle",
	category: "Drawable",
	inputs: [
		{ name: "Enabled", type: "Boolean" },
		{ name: "Position", type: "Point" },
		{ name: "Width", type: "Number" },
		{ name: "Height", type: "Number" },
		{ name: "Color", type: "Color" },
		{ name: "Rotation", type: "Angle" },
		{ name: "Vertical anchor", type: "Text", valid: [ { name: "Top", value: "max" }, { name: "Middle", value: "center" }, { name: "Bottom", value: "min" } ] },
		{ name: "Horizontal anchor", type: "Text", valid: [ { name: "Left", value: "min" }, { name: "Center", value: "center" }, { name: "Right", value: "max" } ] },
		{ name: "Texture", type: "Texture" } ],
	outputs: []
} );
defineBlock( {
	name: "Triangle",
	label: "Triangle",
	category: "Drawable",
	inputs: [
		{ name: "Enabled", type: "Boolean" },
		{ name: "Position", type: "Point" },
		{ name: "Width", type: "Number" },
		{ name: "Height", type: "Number" },
		{ name: "Color", type: "Color" },
		{ name: "Rotation", type: "Angle" },
		{ name: "Vertical anchor", type: "Text", valid: [ { name: "Top", value: "max" }, { name: "Middle", value: "center" }, { name: "Bottom", value: "min" } ] },
		{ name: "Horizontal anchor", type: "Text", valid: [ { name: "Left", value: "min" }, { name: "Center", value: "center" }, { name: "Right", value: "max" } ] } ],
	outputs: []
} );
defineBlock( {
	name: "Arc",
	label: "Arc",
	category: "Drawable",
	inputs: [
		{ name: "Enabled", type: "Boolean" },
		{ name: "Position", type: "Point" },
		{ name: "Outer X radius", type: "Number" },
		{ name: "Outer Y radius", type: "Number" },
		{ name: "Inner X radius", type: "Number" },
		{ name: "Inner Y radius", type: "Number" },
		{ name: "Sweep angle", type: "Radians" },
		{ name: "Start angle", type: "Radians" },
		{ name: "Color", type: "Color" } ]
} );
defineBlock( {
	name: "ScaleNumber",
	label: "Scale number",
	category: "Operation",
	inputs: [
		{ name: "Value", type: "Number" },
		{ name: "Max digits", type: "Number" } ],
	outputs: [
		{ name: "Output", type: "Number" } ]
} );