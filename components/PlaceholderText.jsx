import { Container, Heading, Text } from "@chakra-ui/react"
import { ScrollIndicator } from "./ScrollIndicator"


export const PlaceholderText = () => {
    return(
        <Container maxW='container.xl' p={10}>
            <Heading>Lorem Ipsum.</Heading>
            <Text fontSize={'20pt'} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique, neque auctor luctus egestas, ante libero dictum magna, in faucibus ipsum metus quis neque. Morbi quam eros, ullamcorper a faucibus vel, eleifend vel purus. Duis sit amet justo eget nulla feugiat rhoncus ut sed erat. Cras consequat sapien quis convallis hendrerit. Integer pretium orci elit, ut tincidunt velit sollicitudin vitae. Etiam sit amet nunc sapien. Morbi blandit porttitor nibh, id fringilla felis iaculis in. Maecenas porttitor condimentum orci vel elementum. Ut suscipit ultrices lorem a varius. Vestibulum venenatis venenatis ante. Quisque luctus at mi at placerat. Phasellus egestas, velit et ornare pellentesque, enim sem porta diam, nec facilisis enim turpis et nisl. Aliquam dictum magna sit amet metus dapibus, quis congue ex vulputate.</Text>
        </Container>
    )
}