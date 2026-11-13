import { Link } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";

const Explore = () => {
  return (
    <ScrollView className="p-5">
      <Text className="text-[2rem]">The is the Explore Page.</Text>

      <Link href="/contact" asChild>
        <Pressable className="px-3 py-2 mt-5  rounded-md bg-[#6f4e37] items-center justify-center">
          <Text className="text-white text-[1.5rem] font-bold text-center">
            Contact Us
          </Text>
        </Pressable>
      </Link>

      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quam iste dignissimos voluptates minus sapiente adipisci fugit
        asperiores quidem reiciendis dolores assumenda perspiciatis ab officia
        cum id ex, sequi debitis quod eligendi veritatis eum. Tenetur, provident
        mollitia tempore iusto sapiente soluta repellendus iure eligendi
        architecto quas nam rerum minima quis assumenda ad inventore vero ab
        corporis sit? Maxime, culpa explicabo! Facere nobis et beatae
        dignissimos facilis quo reprehenderit autem excepturi. Nulla illum
        distinctio repellat quia totam ut nesciunt nisi. Beatae totam odit eius.
        Rem provident laboriosam excepturi delectus, deserunt soluta modi
        deleniti, odit iusto est, molestiae ipsam voluptate nisi sit illum
        dignissimos similique totam cum sint eos labore. Illum nemo modi aliquam
        voluptatibus quaerat doloribus vel, nam facere possimus, necessitatibus
        odit culpa expedita quod dolor enim ducimus. Dolore corrupti quas illo
        vel dolorem magnam dicta quaerat maxime est eum consequuntur fugiat sit
        eaque, unde distinctio aperiam, necessitatibus iusto! Aut similique
        dolor dicta, nesciunt fugit neque veniam quae unde veritatis possimus,
        optio esse tenetur quasi cupiditate magnam impedit voluptatem ut, maxime
        est? Architecto modi officiis quisquam, sit rerum mollitia corrupti.
        Nulla eos ipsam dolorem porro blanditiis provident cumque ducimus
        distinctio, placeat facilis fugit dolorum in quibusdam qui omnis
        inventore officia saepe magnam consequuntur. Maiores nisi nulla vitae
        facilis quasi odio, temporibus soluta hic, facere ducimus magni corporis
        earum ex accusantium in, quam nobis. Nemo vitae iusto harum accusantium
        numquam autem, nostrum quibusdam eius quos fugiat! Quae illo quidem
        voluptatibus eaque cumque at expedita ipsam repellendus officiis
        molestiae. Iste alias iusto maiores asperiores magnam nobis non ea,
        dicta voluptate consequatur facilis rem, suscipit tempora ratione
        adipisci, laborum odit! Quasi quia sapiente ab quae quis rem fugiat
        quod! Explicabo eaque unde facere laboriosam rem, eos dolore sed aut
        quisquam quia. Dolorum sit corporis facilis enim consequuntur rem, quos
        reprehenderit quisquam suscipit aliquid quo!
      </Text>
    </ScrollView>
  );
};

export default Explore;
