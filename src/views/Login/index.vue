<template>
    <div class="login">
        <img class="login-bg" src="../../assets/images/login-bg.png" alt="bg">
        <div class="logoin-box">
            <img src="../../assets/images/logo.png" alt="logo" class="logo">
            <h5 class="title">欢迎使用智慧调度管理平台</h5>
            <ul class="login-form">
                <li>
                    <img src="../../assets/images/account.png" alt="user" class="icon">
                    <input type="text" placeholder="请输入用户名" v-model="username">
                </li>
                <li>
                    <img src="../../assets/images/password.png" alt="password" class="icon">
                    <input type="password" placeholder="请输入密码" v-model="password">
                </li>
            </ul>
            <button class="login-btn" @click="handleLogin">登录</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { closeToast, showLoadingToast, showFailToast, showSuccessToast } from 'vant';
import { useUserStore } from '@/store';
import { login as loginApi } from '@/request'

const userStore = useUserStore();
const router = useRouter();

const username = ref('18888888888');
const password = ref('123456');

const handleLogin = async () => {
    if (!username.value || !password.value) {
        showFailToast('请输入用户名和密码');
        return;
    }

    showLoadingToast({
        message: '登录中...',
        duration: 0
    });

    try {
        const { code, data, msg } = await loginApi(username.value, password.value);

        if (code === 200) {
            userStore.setUserInfo(data);
            userStore.setToken(data.token);

            showSuccessToast({
                message: '登录成功',
                duration: 1500,
                onClose: () => {
                    router.push('/home');
                }
            });
        } else {
            showFailToast(msg || '登录失败');
        }
    } catch (error: any) {
        console.error('登录失败:', error);
        showFailToast(error.response?.data?.message || '网络错误，请重试');
    }
}
</script>

<style lang="scss" scoped>
.login {
    background: linear-gradient(180deg, rgba(26, 30, 33, 1) 0%, rgba(51, 54, 59, 1) 100%);
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding-top: 34px;

    .login-bg {
        height: 662px;
        position: absolute;
        left: 48px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;

    }

    .logoin-box {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .logo {
            width: 174.42px;
        }

        .title {
            font-size: 17.44px;
            color: rgba(255, 255, 255, 1);
            margin: 38px 0 40px;
        }

        .login-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            list-style: none;
            padding: 0;

            li {
                margin-bottom: 20px;
                position: relative;

                input {
                    box-sizing: border-box;
                    width: 322.67px;
                    height: 43.6px;
                    border-radius: 3.49px;
                    background: rgba(255, 255, 255, .23);
                    outline: none;
                    border: none;
                    color: #fff;
                    padding-left: 44px;

                    &::placeholder {
                        color: rgba(255, 255, 255, 1);
                        font-size: 14px;
                    }
                }

                .icon {
                    width: 16.57px;
                    position: absolute;
                    left: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }

        .login-btn {
            width: 322.67px;
            height: 43.6px;
            border-radius: 3.49px;
            background: linear-gradient(90deg, rgba(26, 149, 252, 1) 0%, rgba(26, 103, 255, 1) 100%);
            border: none;
            outline: none;
            color: #fff;
            font-size: 13.95px;
            font-weight: 400;
            cursor: pointer;

            &:active {
                background: linear-gradient(90deg, rgba(26, 149, 252, .8) 0%, rgba(26, 103, 255, .8) 100%);
            }
        }
    }

}
</style>