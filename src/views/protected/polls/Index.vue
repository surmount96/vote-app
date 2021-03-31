<template>
    <div class="bg-white">
        <nav class="bg-blue py-4 flex justify-between items-center px-16 text-medium w-full ">
            <div class=" text-center flex text-white items-center justify-center">
                <i class="ri-git-repository-private-line mr-2 text-h4 ri-fw"></i>
                <span class="text-medium font-bold">VOTE APP</span>
            </div>
            <ul class="flex">
                <li>
                    <a href="#" class="text-white uppercase font-bold flex items-center">
                        Logout
                        <i class="ri-arrow-down-s-line ri-fw"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- <div class="flex flex-wrap" style="height:65vh">
            <div class="lg:w-1/2 md:w-1/2 w-full lg:py-32">
                <div class="lg:mx-16">
                    <h3 class="text-blue text-h3 font-light ">Who are the smartest people you know?</h3>
                    <p class="text-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem recusandae eius odit labore nam minima. Fugiat pariatur tempora, eaque temporibus modi, quaerat voluptatem vitae culpa aperiam quasi incidunt reprehenderit.</p>
                </div>
                
            </div>
            <div class="lg:w-1/2 md:w-1/2 w-full lg:flex md:f;ex hidden bg-image">

            </div>
        </div> -->
        <div class="mx-auto lg:w-1/2 md:w-1/2 w-full flex justify-center">
            <p class="text-blue text-medium font-bold uppercase">delegate vote</p>
            <p class="text-uppercase ml-4 text-medium font-semibold uppercase">summary</p>
        </div>
        <div class="mx-auto lg:w-1/2 md:w-1/2 w-full mb-5">
            <div class="relative">
                <input type="search" name="" id="" placeholder="Search or write any name" class="py-3 text-medium placeholder-blue rounded focus:outline-none px-8 border border-gray w-full">
                <div class="absolute top-0 left-0  ml-3" style="margin-top:1.6%">
                    <i class="ri-search-line text-blue ri-fw"></i>
                </div>
            </div>
        </div>

        <div class="mt-5 mx-8">
            <!-- Welcome to vote and instruction -->
            <div class="lg:w-9/12 w-9/12 flex items-center flex-col justify-center mx-auto" style="height:70vh" v-show="showWelcome">
                <div class="bg-white p-4 flex items-center flex-col justify-center rounded-md">
                    <h3 class="font-bold flex items-center text-h4 mb-4">Hi, 👋 </h3>
                    <div class="text-medium text-center">
                        <p>Please select users to vote for</p>
                        <p>You can also see the summary of your vote in the summary tab.</p>
                    </div>
                </div>
                <div class="text-center">
                    <button class="bg-blue text-white py-3 text-medium px-8 rounded-full ml-3" @click="loginPage">Login to vote</button>
                </div>
            </div>

            <!-- Login to vote -->
            <div class="lg:w-1/3 md:w-1/3 lg:mx-auto md:mx-auto mx-4 w-full" v-show="showLogin" style="height:60vh">
                <div class="text-center my-8">
                    <h3 class="font-bold text-h4 text-blue flex items-center justify-center">
                        <i class="ri-shopping-cart-line text-blue ri-fw"></i>
                        <span class="ml-3">OAU Exco Election 2020/2021 Session</span>
                    </h3>
                    <p class="text-medium">Obafemi Awolowo University</p>
                </div>
                <div class=" mb-5">
                    <div class="relative">
                        <input type="text" name="" id="" placeholder="Phone Number" class="py-3 text-medium placeholder-blue rounded focus:outline-none px-8 border border-gray w-full">
                        <div class="absolute top-0 left-0  ml-3" style="margin-top:2.4%">
                            <i class="ri-phone-line text-blue ri-fw"></i>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="text-center">
                        <button class="bg-orange text-white py-3 text-medium px-8 rounded ml-3" @click="loginVote">Continue</button>
                    </div>
                </div>
            </div>


            <!-- vote page -->
            <div class="" v-show="showContent">
                <div class="text-center my-8">
                    <h3 class="font-bold text-h4 text-blue flex items-center justify-center">
                        <i class="ri-shopping-cart-line text-blue ri-fw"></i>
                        <span class="ml-3">OAU Exco Election 2020/2021 Session</span>
                    </h3>
                    <p class="text-medium">Obafemi Awolowo University</p>
                </div>
                <div class="flex flex-wrap">
                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full ">
                        <div class="border border-blue lg:mx-16 md:mx-10 mx-4 p-4">
                            
                            <p class="text-blue font-bold text-medium text-center mb-4">President</p>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Governor Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Senator Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">House of rep Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Governor Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full ">
                        <div class="border border-blue lg:mx-16 md:mx-10 mx-4 p-4">
                            <p class="text-blue font-bold text-medium text-center mb-4">Secretary General</p>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Governor Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Senator Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Governor Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Senator Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full ">
                        <div class="border border-blue lg:mx-16 md:mx-10 mx-4 p-4">
                            <p class="text-blue font-bold text-medium text-center mb-4">Financial Secretary</p>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe Samson</p>
                                    </div>
                                    <p class="">Governor Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Senator Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Governor Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="">
                                    <input type="checkbox" name="" id="">
                                </div>
                                <div class="ml-3">
                                    <div class="h-12 w-12 bg-blue"></div>
                                </div>
                                <div class="text-medium ml-2">
                                    <div class="flex justify-between">
                                        <p class="font-bold ">Jane Doe</p>
                                    </div>
                                    <p class="">Senator Position</p>
                                </div>
                                <div class="ml-auto">
                                    <p class="text-medium">PDP</p>
                                    <div class="h-2 w-8 mx-auto bg-blue"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto w-48 my-5">
                        <button class="bg-blue text-white py-3 text-medium px-8 rounded-full ml-3">Submit vote</button>
                    </div>
                </div>
            </div>
        </div>

        <footer class="bg-gray-400 mt-4">
            <div class="text-center py-5 text-medium">
                <p>All right reserved, &copy; copyright <span class="text-blue text-medium font-bold">VOTEAPP</span> 2020</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showLogin:false,
            showWelcome:true,
            showContent:false
        };
    },
    methods:{
        loginPage(){
            this.showWelcome = false;
            this.showLogin = true
        },
        loginVote(){
            this.showContent = true;
            this.showLogin = false;
        }
    }
}
</script>

<style lang="scss">
.bg-image{
    background-image:url('../../../assets/images/queue.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
</style>