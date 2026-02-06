# 1. 基础阶段：指定基础镜像
FROM oven/bun:1 AS base
WORKDIR /app

# 2. 依赖阶段：安装依赖
# 这是一个独立的阶段，利用缓存层，只要 package.json 不变，就不会重新安装
FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# 3. 构建阶段：编译代码
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# 设置环境变量为生产构建
ENV NODE_ENV production
RUN bun run build

# 4. 运行阶段：这是最终生成的镜像
# 只要构建产物和依赖，不要源代码和构建工具，镜像非常小
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# 设置非 root 用户运行，提高安全性
RUN groupadd -g 1001 -r nodejs
RUN useradd -u 1001 -r -g nodejs bun

# 复制构建产物
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 复制 node_modules (生产环境依赖)
COPY --from=builder /app/node_modules ./node_modules

# 切换用户
USER bun

# 暴露端口
EXPOSE 3000

# 设置环境变量，告诉 Next.js 使用 standalone 输出模式
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# 启动命令
CMD ["bun", "run", "start"]
