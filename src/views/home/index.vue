<template>
    <div class="home">
        <header>
            <div class="left">
                <img src="../../assets/images/logo.png" alt="logo">
                <span>智慧调度管理平台</span>
            </div>
            <button class="logout">退出登录</button>
        </header>

        <main>
            <section class="user-info">
                <div class="profile">
                    <img src="../../assets/images/account.png" alt="头像">
                    <div>
                        <h3>张静怡</h3>
                        <span>账号ID:XXXXXXXX</span>
                    </div>
                </div>

                <div class="stats">
                    <div>
                        <strong>0</strong>
                        <span>今日调度案件</span>
                    </div>
                    <div class="divider"></div>
                    <div>
                        <strong>0</strong>
                        <span>总调度案件</span>
                    </div>
                </div>
            </section>

            <section class="case-list"></section>
        </main>

        <div class="create-case"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Divider } from 'vant';
import { getCaseCount as getCaseCountApi } from '@/request';

const getCaseCount = async () => {
    const res = await getCaseCountApi();
    console.log(res);
}

onMounted(() => {
    getCaseCount();
})
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    overflow: hidden;

    header {
        height: 72px;
        background: linear-gradient(180deg, #1a1e21 0%, #33363b 100%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        color: white;

        .left {
            display: flex;
            align-items: center;

            img {
                height: 50px;
                width: 50px;
                margin-right: 10px;
            }

            span {
                font-size: 18px;
            }
        }

        .logout {
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    main {
        background: #fafbfc;
        padding: 20px;
        height: calc(100vh - 72px);

        .user-info {
            .profile {
                display: flex;
                align-items: center;
                margin-bottom: 26px;

                img {
                    height: 56px;
                    width: 56px;
                    border-radius: 50%;
                    margin-right: 16px;
                }

                h3 {
                    font-size: 22px;
                    margin: 0 0 4px 0;
                }

                span {
                    color: rgba(31, 51, 73, 0.56);
                    font-size: 16px;
                }
            }

            .stats {
                display: flex;
                align-items: center;
                height: 105px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                background: white;

                >div {
                    flex: 1;
                    text-align: center;

                    strong {
                        display: block;
                        font-size: 28px;
                        margin-bottom: 8px;
                        color: #333;
                    }

                    span {
                        color: #a6a6a6;
                        font-size: 14px;
                    }
                }

                .divider {
                    width: 1px;
                    height: 69px;
                    background: #e5e5e5;
                    flex: none !important;
                }
            }
        }
    }
}
</style>
