<template>
    <div>
        <div class="flex items-center justify-between p-5 bg-white">
            <p>
                Dashboard
            </p>
            <button @click="signOut" class="text-red border border-red py-2 px-5 text-medium">
                Logout
            </button>
        </div>
        <div v-show="!thanks">
            <p class="text-medium px-5">Please select one of the options to vote</p>
            <div v-show="loading">
                <div class="lg:w-1/2 md:w-1/2 lg:mx-auto md:mx-auto mx-4 my-4 bg-white h-64 flex items-center justify-center">
                    <div class="text-center">
                        <h4 class="text-h5 font-bold mb-2">Please wait...</h4>
                        <p class="text-medium">Your request is being processed.</p>
                    </div>

                </div>
            </div>
            <div class="flex flex-wrap px-4">
                <div class="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mb-4" v-for="contest in allContestant" :key="contest.id">
                    <div class="py-4 px-3 bg-white m-2  shadow rounded-md">
                        <div class="flex items-center justify-center">
                            <div class="flex items-center justify-center bg-gray rounded-full h-12 w-12">
                                <i class="ri-user-fill ri-fw"></i>
                            </div>
                        </div>
                        <div class="mt-1 mb-3 text-center">
                            <h5 class="">{{ contest.name }}</h5>
                            <p class="text-medium">{{ contest.position }}</p>
                        </div>
                        <div class="flex justify-center text-medium">
                            <button @click="selectOption(contest.id,true)" :class="{'border-2 border-warning': contest.vote == true }" class="bg-success text-white px-3 py-1 rounded-sm focus:outline-none">Yes</button>
                            <div class="mx-1"></div>
                            <button @click="selectOption(contest.id,false)" :class="{'border-2 border-warning': contest.vote == false }" class="bg-red text-white px-3 py-1 rounded-sm focus:outline-none">No</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="px-5" v-show="!loading">
                <button @click="voteCompleted" class="bg-blue text-medium text-white px-10 py-2 rounded-md focus:outline-none">Submit</button>          
            </div>
        </div>

        <div v-show="thanks">
            <div class="lg:w-1/2 md:w-1/2 lg:mx-auto md:mx-auto mx-4 my-4 bg-white h-64 flex items-center justify-center">
                <div class="text-center">
                    <div class="flex items-center justify-center">
                        <div class="h-16 w-16 border border-success rounded-full mb-3 flex items-center justify-center">
                            <i class="ri-check-fill ri-fw text-success text-h5"></i>
                        </div>
                    </div>

                    <h4 class="text-h5 font-bold mb-2">Thank You</h4>
                    <p class="text-medium">You have already particpated in the election</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('auth');

export default {
    data() {
        return {
            contestants:[],
            thanks:false,
            loading:false
        };
    },
    computed:{
        allContestant() {
            return this.contestants;
        }
    },
    mounted(){
        this.getContestants()
    },
    methods:{
        /* eslint-disable */
        ...mapActions(['submitVote','fetchContestant','logout']),
        selectOption(id,value){
            let arr = this.contestants.filter((item) => {
                if(item.id === id) {
                    item.vote = value;
                }

                return item;
            })

            this.contestants = arr;
        },
        async voteCompleted(){
            try{
                const res = await this.submitVote({contestant: this.contestants});
                if(res.status === 201) {
                    this.$toast.success('Voting process has been completed');
                    this.getContestants()
                }
            }catch (err) {
                this.$toast.error(err.response.data.message);
            }
        },

        async getContestants(){
            this.loading = true;
            try{
                const res = await this.fetchContestant();
                this.contestants = res.data.contestants
                this.loading = false;
            }catch (err) {
                if(err.response.status === 301) {
                    this.thanks = true
                } else {
                    this.$toast.error(err.response.data.message);
                }

                this.loading = false;
            }
        },
        signOut(){
            if(this.logout()) {
                this.$router.push({path: '/login'})
            }
        }
    
    }
}
</script>

<style lang="scss">
    .bg-gray{
        background-color: #f9f9f9;
    }
</style>