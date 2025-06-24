<template>
    <div class="home-contanier">
        <div class="home-header">
            <div class="home-header-left">
                <img src="../../assets/images/logo.png" alt="logo" class="logo">
                <div class="title">智慧调度管理平台</div>
            </div>
            <div class="logout">退出登录</div>
        </div>
        <div class="home-content">
            <div class="home-person">
                <div class="info">
                    <img src="../../assets/images/account.png" alt="logo" class="avtar">
                    <div>
                        <div class="name">张静怡</div>
                        <span class="id">账号ID:XXXXXXXX</span>
                    </div>
                </div>
                <div class="detail">
                    <div>
                        <div class="today">0</div>
                        <div class="subtitle">今日调度案件</div>
                    </div>
                    <p class="line"></p>
                    <div>
                        <div class="today">0</div>
                        <div class="subtitle">总调度案件</div>
                    </div>
                </div>
            </div>
            <div class="case-list"></div>
        </div>
        <div class="home-create-case"></div>
    </div>
</template>

<script>
import { Divider } from 'vant';
</script>

<style lang="scss" scoped>
.home-contanier {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;


    .home-header {
        height: 72px;
        background: linear-gradient(180deg, rgba(26, 30, 33, 1) 0%, rgba(51, 54, 59, 1) 100%);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .home-header-left {
            display: flex;
            align-items: center;
        }

        .logo {
            height: 50px;
            width: 50px;
            margin-left: 20px;
        }

        .title {
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            margin-left: 1px;
            font-weight: 400;
        }

        .logout {
            font-size: 16px;
            margin-right: 20px;
            color: rgba(255, 255, 255, 1);

        }


    }

    .home-content {
        background: rgba(250, 251, 252, 1);
        padding: 20px;
        height: 100%;

        .home-person {

            .info {
                display: flex;
                align-items: center;

                .avtar {
                    height: 56px;
                    width: 56px;
                    margin-right: 16px;
                    border-radius: 50%;
                }

                .name {
                    font-size: 22px;

                }

                .id {
                    color: rgba(31, 51, 73, 0.56);
                    font-size: 16px;
                }
            }

            .detail {
                display: flex;
                margin: 26px 0;
                height: 105px;
                border-radius: 8px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
                align-items: center;
                text-align: center;

                .line{
                    height: 69px;
                    background: rgba(229, 229, 229, 1);
                    width: 1px;

                    .subtitle{
                        color: rgba(166, 166, 166, 1);
                    }
                }

                >div {
                    width: 50%;

                }
            }
        }
    }
}
</style>
