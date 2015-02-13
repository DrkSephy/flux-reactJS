/** @jsx React.DOM */
var React = require('react');
var Catalogs\ = require('../components/app-catalog.js');

var APP = 
	React.createClass({
		render: function(){
			return (
				<div>
				<h1> Lets Shop </h1>
				<Catalog />
				</div>
			)
		}
	});
module.exports = APP;