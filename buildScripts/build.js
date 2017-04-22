/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production via Webpack. This will take a moment..'));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

 const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if(jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    console.log(`Webpack stats ${stats}`);

    // if we got this far, build suceeded
    console.log(chalk.green('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'));

    return 0;
});
