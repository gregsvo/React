var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            firstName: 'React',
            message: 'This is a default props message'
        };
    },

    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!!!</h1>
                <p>
                    {message}
                </p>
            </div>
        );
    }
});

var firstName = 'Greg';

ReactDOM.render(
    <Greeter name={firstName} message='Message From The Props!' />,
    document.getElementById('app')
);
