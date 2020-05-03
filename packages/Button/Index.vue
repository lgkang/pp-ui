<template>
    <button class="pp-button">
        <span class="pp-text" @click="handleClick">{{text}}</span>
    </button>
</template>
<script>
    export default {
        name: "pp-button",
        props: {
            /**
             * The color for the button.
             */
            text: {
                type: String,
                default: "这是皮皮按钮"
            },
            /**
             * The size of the button
             * @values small, normal, large
             */
            size: {
                type: String,
                default: "normal"
            },
        },
        methods: {
            /**
             * handleClick the counter. This method is not marked @public and is not visible in the styleguide.
             */
            handleClick() {
                console.log("点击事件触发");
                /**
                 * After increment event
                 * @event after
                 * @type {number}
                 */
                this.$emit("text-click", true);
            }
        }
    };
</script>
<style lang="less">
    .pp-button {
        background: red;
    }

    .pp-text {
        color: #fff;
    }
</style>
<docs>
    ```vue live lineNumbers
    <template>
        <pp-button text="真的啊" @text-click="handleClick"/>
    </template>
    <script>
        export default {
            methods: {
                handleClick(bol) {
                    console.log(bol + "pipi");
                }
            }
        };
    </script>
    ```
</docs>

