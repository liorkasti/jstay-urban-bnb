const messagesFromMe = [{
    message: "hi",
    index: 0
},
{
    message: "good you?",
    index: 2
},
{
    message: "yeah that sounds great",
    index: 4
}]

const messagesFromMe = [{
    message: "Sup",
    index: 1
},
{
    message: "good",
    index: 3
},
{
    message: "yeah it does doesn't it",
    index: 5
}];

export default function Messages() {
    return (<View>{
        messagesToMe.map((toMe) => {
            massagesFromMe.map((fromMe) => {
                return (
                    <View>
                        <View key={fromMe.index < toMe.index ? toMe.index + "container" : fromMe.index + "container"}>
                            <Text>{fromMe.index < toMe.index ? toMe.message : fromMe.message}</Text>
                        </View>
                        <View key={fromMe.index > toMe.index ? toMe.index + "container" : fromMe.index + "container"}>
                            <Text>{fromMe.index > toMe.index ? toMe.message : fromMe.message}</Text>
                        </View>
                    </View>
                )
            })
        })}
    </View>
    )
}