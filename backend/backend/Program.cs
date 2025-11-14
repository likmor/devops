
namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
			var builder = WebApplication.CreateBuilder(args);
			builder.Services.AddCors(options =>
			{
				options.AddPolicy("AllowFrontend",
					policy =>
					{
						policy.WithOrigins("http://localhost")
							  .AllowAnyHeader()
							  .AllowAnyMethod();
					});
			});
			var app = builder.Build();
			app.UseCors("AllowFrontend");

			app.MapGet("/", () => "Hello World from backend!");

			app.Run();
        }
    }
}
