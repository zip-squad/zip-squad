import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from 'modules/users/users.module';
import { ExpensesModule } from 'modules/expenses/expenses.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
    UsersModule,
    ExpensesModule,
    AuthModule,
  ],
})
export class AppModule {}
