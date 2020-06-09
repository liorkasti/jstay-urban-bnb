const messages = [{
    from: "nachum",
    unreadMessage: true,
    lastMessaged: "epoc",/* I'll deal with the time ordering of the messages*/
},
{
    from: "nachum",
    unreadMessage: true,
    lastMessaged: "epoc",/* I'll deal with the time ordering of the messages*/
},
{
    from: "nachum",
    unreadMessage: true,
    lastMessaged: "epoc",/* I'll deal with the ordering of the messages*/
}]

export default function Messages() {
    return (<View>{
        messages.map((message) => {
            return (
                <View>
                    <Text>{message.from}</Text>
                    {message.unreadMessage && <Text color="red">!</Text>}
                </View>
            )
        })}
        </View>
    )
}