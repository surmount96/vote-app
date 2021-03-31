<template>
    <div class="bg-white">
        <header class="bg-gray-400">
            <nav class="flex justify-between px-16 py-5 text-medium fixed top-0 w-full">
                <div class="mb-6 text-center flex text-blue items-center justify-center">
                    <i class="ri-git-repository-private-line mr-2 text-h4 ri-fw"></i>
                    <span class="text-medium font-bold">VOTE APP</span>
                </div>
                <ul class="flex ">
                    <li>
                        <a href="#" class=" mx-4">
                            Subscribe
                        </a>
                    </li>
                    <li>
                        <a href="/login" class="mx-4 ">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/register" class="mx-4 bg-blue text-white rounded  px-4 py-3">
                            Register
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="lg:mx-20 md:mx-16 mx-10 lg:py-32">
                <div class="" style="width:50%">
                    <h3 class="font-bold text-h3  mb-4 " >Make your vote count by voting for your desired constentant</h3>
                    <p class="text-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus nisi nam excepturi voluptates quidem ducimus molestiae aut quo qui quae exercitationem quas debitis enim ipsa eius beatae, voluptate ab.</p>
                </div>
                
                <div class="my-5">
                    <button class="bg-gray-light text-white py-3 text-medium px-8 rounded">REGISTER</button>
                    <button class="bg-blue text-white  py-3 text-medium px-8 rounded ml-3">Discover</button>
                </div>
            </div>
        </header>

        <section class="bg-white lg:mx-20 md:mx-16 mx-10 lg:py-8">
            <h3 class="text-blue uppercase text-center font-bold text-h4">Pricing Plan</h3>
            <div class="flex flex-wrap my-8">
                <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4">
                    <div class="mx-12 bg-gray-400 h-64 p-3">
                        <div class="text-center">
                            <i class="ri-send-plane-line text-h3 text-blue ri-fw"></i>
                        </div>
                        <h3 class="text-blue text-center font-bold text-body-2 my-3">Basic</h3>
                        <p class="text-medium text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus nisi nam exc</p>
                        <div class="text-center">
                            <button class="bg-blue text-white py-3 text-medium px-8 rounded-full ml-3">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4">
                    <div class="mx-12 bg-gray-400 h-64 p-3">
                         <div class="text-center">
                            <i class="ri-send-plane-line text-h3 text-blue ri-fw"></i>
                        </div>
                        <h3 class="text-blue text-center font-bold text-body-2 my-3">Premium</h3>
                        <p class="text-medium text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus nisi nam exc</p>
                        <div class="text-center">
                            <button class="bg-blue text-white py-3 text-medium px-8 rounded-full ml-3">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4">
                    <div class="mx-12 bg-gray-400 h-64 p-3">
                         <div class="text-center">
                            <i class="ri-send-plane-line text-h3 text-blue ri-fw"></i>
                        </div>
                        <h3 class="text-blue text-center font-bold text-body-2 my-3">Ultimate</h3>
                        <p class="text-medium text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus nisi nam exc</p>
                        <div class="text-center">
                            <button class="bg-blue text-white py-3 text-medium px-8 rounded-full ml-3">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-400 ">
            <div class="lg:mx-20 md:mx-16 mx-10 lg:py-8">
                <div class="flex flex-wrap my-8">
                    <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full mb-4">
                        <img src="../../assets/images/note.svg">
                    </div>
                    <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full mb-4 lg:py-20 md:py-12">
                        <div class=" border-2 border-gray my-4 rounded-lg px-8 py-2">
                            <a href="/" class="block py-2 text-gray-dark flex items-center">
                                <i class="ri-group-2-line text-blue ri-fw"></i>
                                <span class="text-medium ml-4">Create a new vote and upload nominees</span>
                            </a>
                        </div>
                        <div class=" border-2 border-gray my-4 rounded-lg px-8 py-2">
                            <a href="/" class="block py-2 text-gray-dark flex items-center">
                                <i class="ri-calculator-line text-blue ri-fw"></i>
                                <span class="text-medium ml-4">Generate Ballot slips</span>
                            </a>
                        </div>
                        <div class=" border-2 border-gray my-4 rounded-lg px-8 py-2">
                            <a href="/" class="block py-2 text-gray-dark flex items-center">
                                <i class="ri-send-plane-line text-blue ri-fw"></i>
                                <span class="text-medium ml-4">Creating parties</span>
                            </a>
                        </div>
                        <div class=" border-2 border-gray my-4 rounded-lg px-8 py-2">
                            <a href="/" class="block py-2 text-gray-dark flex items-center">
                                <i class="ri-bar-chart-line text-blue ri-fw"></i>
                                <span class="text-medium ml-4">Create voting group & view result statistics</span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>

        <footer>
            <div class="text-center py-5 text-medium">
                <p>All right reserved, &copy; copyright <span class="text-blue text-medium font-bold">VOTEAPP</span> 2020</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>