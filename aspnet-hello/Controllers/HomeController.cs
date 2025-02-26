using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using hello.Models;

namespace hello.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult Sub([FromQuery] string? q)
    {
	var message = q is null ? "Please set URL Query like ?q=hello" : "Query is " + q;
	return View(new MessageModel { Message = message });
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
